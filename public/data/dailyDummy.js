export const DAILY = {
  date: "2024-11-26",
  categoryRates: [
    { category: "family", percentage: 0 },
    { category: "self", percentage: 10 },
    { category: "friend", percentage: 16.4 },
    { category: "study", percentage: 73.6 },
  ],
  lowestCategory: {
    category: "family",
    percentage: 0,
    message: "0% 카테고리 활동을 늘려주세요!",
  },
  graphData: {
    type: "pie",
    data: [0, 10, 16.4, 73.6],
    labels: ["Family", "Self", "Friend", "Study"],
  },
};
