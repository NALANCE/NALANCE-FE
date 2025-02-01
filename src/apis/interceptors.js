import axiosInstance from "./axiosConfig";

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // accessToken이 존재한다면 헤더에 토큰 추가
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // 수정된 config 객체 반환
    return config;
  },
  (error) => {
    return Promise.reject(error); // 요청 오류 발생 시 에러 반환
  }
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 403) {
      // 403 오류시 accessToken 만료 가능성 O
      console.log("💥accessToken 만료, refreshToken으로 갱신 시도");

      const refreshToken = localStorage.getItem("refreshToken");
      console.log("refreshToken", refreshToken);

      const accessToken = localStorage.getItem("accessToken");
      console.log("accessToken", accessToken);

      if (refreshToken && accessToken) {
        try {
          // refreshToken으로 새로운 accessToken 요청
          const response = await axiosInstance.post("/api/v0/members/reissue", {
            accessToken: accessToken,
            refreshToken: refreshToken,
          });

          // 응답 데이터 확인
          console.log("토큰 갱신 응답 데이터: ", response.data);

          // 새로운 accessToken 저장
          const newAccessToken = response.data.result.accessToken;
          localStorage.setItem("accessToken", newAccessToken);

          // 새로운 refreshToken 저장
          const newRefreshToken = response.data.result.refreshToken;
          localStorage.setItem("refreshToken", newRefreshToken);

          // 요청 다시 시도
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;

          // 요청 보내기
          return axiosInstance(error.config);
        } catch (refreshTokenError) {
          console.log("💥refreshToken으로 토큰 갱신 실패: ", refreshTokenError);

          // refreshToken도 만료된 경우, 사용자에게 재로그인 요청
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
    }
    console.log("💥응답 오류: ", error.message);

    return Promise.reject(error);
  }
);
