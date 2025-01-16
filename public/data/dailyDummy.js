export const DAILY = {
  date: "2025-01-17",
  categoryRates: [
    { category: "가족", percentage: 0 },
    { category: "나", percentage: 10 },
    { category: "친구", percentage: 16.4 },
    { category: "학업", percentage: 73.6 },
    { category: "학업2", percentage: 0 },
  ],
  lowestCategory: {
    category: "가족",
    percentage: 0,
    message: "0% 카테고리 활동을 늘려주세요!",
  },
  graphData: {
    type: "pie",
    data: [0, 10, 16.4, 73.6, 0],
    labels: ["가족", "나", "친구", "학업", "학업2"],
  },
};
