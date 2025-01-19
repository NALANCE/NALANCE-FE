import ShowDate from "components/ShowDate/ShowDate";
import ImgSave from "components/ImgSave/ImgSave";
import TodoCategoryBtn from "components/TodoCategoryBtn/TodoCategoryBtn"; // TodoCategoryBtn 임포트

import * as S from "./Todo.style";

import { useState } from "react";

// 날짜 포맷팅 함수
const formatDate = (date) => {
  let year = date.getFullYear(); // 년
  let month = String(date.getMonth() + 1).padStart(2, "0"); // 월
  let day = String(date.getDate()).padStart(2, "0"); // 일

  return `${year}-${month}-${day}`; // 년-월-일 형태로 반환 (문자열 형태, 더미데이터에서 비교를 위해)
};

const Todo = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  const [todos, setTodos] = useState([]); // Todo 리스트 상태 추가

  // 날짜 변경시
  const handleDateChange = (newDate) => {
    const formattedDate = typeof newDate === "object" && newDate instanceof Date ? formatDate(newDate) : newDate; // 포맷 (문자열로)
    setDate(formattedDate); // 새로운 날짜 상태 업데이트
  };

  return (
    <>
      <S.DailyContainer className="ImgContainer">
        <ShowDate date={date} onDateChange={handleDateChange} />
        <S.TodoCategoryContainer>
          <TodoCategoryBtn defaultValue="가족"  />
          <TodoCategoryBtn defaultValue="친구"  />
          <TodoCategoryBtn defaultValue="학업"  />
        </S.TodoCategoryContainer>
        <ImgSave />
      </S.DailyContainer>
    </>
  );
};

export default Todo;
