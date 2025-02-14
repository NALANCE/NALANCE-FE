import useDate from "hooks/useDate";
import { useState, useEffect } from "react";
import { getDailyData, getDailyBalanced } from "apis/daily/getDailyData";

const useDailyData = () => {
  // api 데이터 상태
  const [data, setData] = useState(null);

  // balance 관련
  const [balance, setBalance] = useState(null);

  // 에러 상태
  const [error, setError] = useState(null);

  // 데이터 로딩 상태 관리
  const [isLoading, setIsLoading] = useState(true);

  // 날짜 가져오기
  const [date, handleDateChange] = useDate();

  // api 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // date 변경될 때마다 스켈레톤 ui
      setError(null); // 에러 초기화

      try {
        const result = await getDailyData(date);
        setData(result);

        const balanced = await getDailyBalanced(date);
        setBalance(balanced);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // 로딩상태 비활성화
      }
    };

    fetchData();
  }, [date]);

  return { date, handleDateChange, data, balance, error, isLoading };
};

export default useDailyData;
