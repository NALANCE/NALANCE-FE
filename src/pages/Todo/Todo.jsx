import ShowDate from "components/ShowDate/ShowDate";
import ImgSave from "components/ImgSave/ImgSave";
import TodoCategoryBtn from "components/TodoCategoryBtn/TodoCategoryBtn";
import TodoModal from "components/TodoModal/TodoModal";
import TodoLists from "components/TodoLists/TodoLists";
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
  const [todos, setTodos] = useState({ 가족: [], 친구: [], 학업: [] }); // Todo 리스트 상태를 카테고리별로 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(""); // 현재 카테고리 상태 추가

  const handleDateChange = (newDate) => {
    const formattedDate = typeof newDate === "object" && newDate instanceof Date ? formatDate(newDate) : newDate;
    setDate(formattedDate);
  };

  const handleAddTodo = (newTodo) => {
    setTodos({
      ...todos,
      [currentCategory]: [...todos[currentCategory], newTodo],
    });
    setIsModalOpen(false);
  };

  const openModal = (category) => {
    setCurrentCategory(category);
    setIsModalOpen(true);
  };

  return (
    <>
      <S.DailyContainer className="ImgContainer">
        <ShowDate date={date} onDateChange={handleDateChange} />
        <S.TodoCategoryContainer>
          <TodoCategoryBtn defaultValue="가족" onAddTodo={() => openModal("가족")} />
          <TodoLists todos={todos["가족"]} />
          <TodoCategoryBtn defaultValue="친구" onAddTodo={() => openModal("친구")} />
          <TodoLists todos={todos["친구"]} />
          <TodoCategoryBtn defaultValue="학업" onAddTodo={() => openModal("학업")} />
          <TodoLists todos={todos["학업"]} />
        </S.TodoCategoryContainer>
        <ImgSave />
      </S.DailyContainer>
      {isModalOpen && <TodoModal onAddTodo={handleAddTodo} />}
    </>
  );
};

export default Todo;
