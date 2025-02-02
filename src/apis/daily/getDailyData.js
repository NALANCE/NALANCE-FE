import axiosInstance from "../defaultAxios";

if (!localStorage.getItem("accessToken")) {
  // 로그인 연동 전 직접 토큰 저장
  localStorage.setItem(
    "accessToken",
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3Mzg0NDcwOTZ9.vGnW0GVPTGnSBwgc7OCJTmGTb9GcjwtM9TgD6oUuXXg"
  );

  localStorage.setItem(
    "refreshToken",
    "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzkwNTAwOTZ9.0z4jiLH-ds4DozEkfdhBrTUoGSvkrOiF38P0tREZZOs"
  );
}

export const getDailyData = async (date) => {
  // 로컬 스토리지에서 accessToken 가져오기
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("accessToken이 없음");
    return; // 토큰이 없으면 요청을 보내지 않도록 처리
  }

  try {
    // console.log("accessToken", accessToken);

    const response = await axiosInstance.get(`/api/v0/graph/daily/${date}`);

    // console.log("daily api응답 데이터:", response);

    return response.data.result.data; // 데이터 반환
  } catch (error) {
    console.error("에러발생", error.response ? error.response : error);
  }
};

export const getMonthlyData = async (year, month) => {
  // 로컬 스토리지에서 accessToken 가져오기
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("accessToken이 없음");
    return; // 토큰이 없으면 요청을 보내지 않도록 처리
  }

  try {
    const response = await axiosInstance.get(`/api/v0/graph/calendar/monthly/${year}/${month}`);

    // console.log("monthly api응답 데이터: ", response);

    return response.data.result.data;
  } catch (error) {
    console.error("에러발생", error.response ? error.response : error);
  }
};

export const getHighestColor = async (date) => {
  // 로컬 스토리지에서 accessToken 가져오기
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("accessToken이 없음");
    return; // 토큰이 없으면 요청을 보내지 않도록 처리
  }

  try {
    // console.log("accessToken", accessToken);

    const response = await axiosInstance.get(`/api/v0/graph/daily/${date}`);

    // 데이터가 있다면 가장 높은 비율 카테고리 찾기
    const data = response.data.result.data;

    if (data.length === 0) {
      return { highestColor: "#ffffff" };
    }

    const highestCategory = data.reduce((max, current) => {
      return current.ratio > max.ratio ? current : max;
    });

    const highestColor = highestCategory.color;

    return { highestColor }; // 데이터 반환
  } catch (error) {
    console.error("에러발생", error.response ? error.response : error);
  }
};
