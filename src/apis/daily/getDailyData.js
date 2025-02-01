import axiosInstance from "../defaultAxios";

if (!localStorage.getItem("accessToken")) {
  // 로그인 연동 전 직접 토큰 저장
  localStorage.setItem(
    "accessToken",
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzIiwiYXV0aCI6IlJPTEVfVVNFUiIsImV4cCI6MTczODQyOTAxM30.FvrxOE-nTH6npvFsFzWRrP9eBClqvx41wGszl0unNxE"
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

    console.log("api응답 데이터:", response);

    return response.data.result.data; // 데이터 반환
  } catch (error) {
    console.error("에러발생", error.response ? error.response : error);
  }
};
