export const MONTHLY = {
  year: 2024,
  month: 11,
  dailyRates: [
    { date: "2024-11-01", categories: { family: 20, friend: 30, study: 40, self: 10 } },
    { date: "2024-11-02", categories: { family: 15, friend: 25, study: 50, self: 10 } },
  ],
  categoryRates: [
    { category: "family", percentage: 17.2 },
    { category: "friend", percentage: 40.7 },
    { category: "study", percentage: 33.0 },
    { category: "self", percentage: 10.1 },
  ],
  lowestCategory: "self", // 활동이 제일 낮은 카테고리
  calendarHighlights: [
    { date: "2024-11-01", highlightCategory: "family" },
    { date: "2024-11-18", highlightCategory: "study" },
  ],
};
