import axiosInstance from "../defaultAxios";

export const getDailyData = async () => {
  // 로컬 스토리지에서 accessToken 가져오기
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.error("Access token is missing");
    return; // 토큰이 없으면 요청을 보내지 않도록 처리
  }

  try {
    console.log("accessToken", accessToken);

    const response = await axiosInstance.get("/api/v0/graph/daily/2025-01-13");

    console.log("api응답 데이터:", response);
  } catch (error) {
    console.error("에러발생", error.response ? error.response : error);
  }
};
