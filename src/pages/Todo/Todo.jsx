import ShowDate from "components/ShowDate/ShowDate";
import ImgSave from "components/ImgSave/ImgSave";
import TodoCategoryBtn from "components/TodoCategoryBtn/TodoCategoryBtn";
import TodoLists from "components/TodoLists/TodoLists";
import * as S from "./Todo.style";
import { useState, useEffect, useRef } from "react";
import axiosInstance from "apis/defaultAxios";

import useDailyData from "hooks/useDailyData";
import PieChart from "components/PieChart/PieChart";
import PieList from "components/PieList/PieList";
import ChartSkeleton from "components/Skeleton/ChartSkeleton";

const Todo = () => {
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [todos, setTodos] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { date: dailyDate, handleDateChange, data, balance, error, isLoading: isDailyLoading } = useDailyData(); // 하루비율

  useEffect(() => {
    setDate(dailyDate);
  }, [dailyDate]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axiosInstance.get("/api/v0/categories", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setCategories(response.data.result);

        // 초기 상태 설정
        const initialTodos = response.data.result.reduce((acc, category) => {
          acc[category.categoryName] = [];
          return acc;
        }, {});
        setTodos(initialTodos);
      } catch (error) {
        console.error("카테고리 가져오기 실패:", error);
      }
    };

    fetchCategories();
  }, []);

  const isInitialRender = useRef(true);

  useEffect(() => {
    if (categories.length > 0) {
      categories.forEach((category) => {
        fetchTodos(date, category.categoryId);
      });
    }
  }, [date, categories]);

  const fetchTodos = async (selectedDate, categoryId) => {
    if (!selectedDate) {
      console.error("🚨 Error: date 값이 없습니다!", selectedDate);
      return;
    }

    console.log("📅 fetchTodos 실행 - 전달된 date 값:", selectedDate);

    setIsLoading(true);
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axiosInstance.get("/api/v0/todos/", {
        params: {
          dateList: selectedDate,
          categoryIdList: categoryId,
          page: 1,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const todoList = response.data.result.todoList;
      setTodos((prevTodos) => ({
        ...prevTodos,
        [categories.find((cat) => cat.categoryId === categoryId).categoryName]: todoList.map((todo) => ({
          name: todo.todoName,
          categoryId: todo.categoryId,
          status: todo.status,
          todoId: todo.todoId,
          startTime: todo.startTime,
          endTime: todo.endTime,
          formattedDuration: todo.formattedDuration,
        })),
      }));

      console.log("📌 response.data.result.todoList:", todoList);
    } catch (error) {
      console.error("🚨 TODO 데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTodoDirectly = (categoryName) => {
    const category = categories.find((cat) => cat.categoryName === categoryName);
    if (!category) return;

    setTodos({
      ...todos,
      [categoryName]: [
        ...todos[categoryName],
        {
          name: "", // 기본값
          categoryId: category.categoryId,
          date: new Date().toISOString().split("T")[0], // 오늘 날짜 기본값
          startTime: "00:00", // 기본값
          endTime: "00:00", // 기본값
          status: 2,
          todoId: null, // POST 후 서버에서 받음
        },
      ],
    });
  };

  const handleTodoTextChange = async (categoryName, index, newText, status, todoId) => {
    const category = categories.find((cat) => cat.categoryName === categoryName);
    if (!category) return;

    const todo = todos[categoryName][index];

    if (!todo) {
      console.error("🚨 수정하려는 Todo를 찾을 수 없습니다!");
      return;
    }

    if (todo.name === newText) {
      console.warn("🚨 동일한 데이터 중복 요청 방지:", newText);
      return;
    }

    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!todoId) {
        // 🟢 POST 요청 (새로운 Todo 생성)
        await axiosInstance.post(
          `/api/v0/todos/`,
          {
            todoName: newText || "새로운 할 일",
            date: date || new Date().toISOString().split("T")[0],
            categoryId: category.categoryId,
            startTime: "00:00",
            endTime: "00:00",
            status: status || 1,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        console.log("✅ 새 Todo 생성 성공. ID 없음 -> GET 요청 실행");

        // 🔥 새로 생성된 todoId를 GET 요청으로 가져오기
        await fetchTodos(date, category.categoryId);
      } else {
        // 🟢 PATCH 요청 (기존 Todo 수정)
        const response = await axiosInstance.patch(
          `/api/v0/todos/${todoId}`,
          {
            todoName: newText,
            date,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );

        console.log("✅ Todo 수정 성공:", response.data);
        await fetchTodos(date, category.categoryId);

        // 🔥 기존 Todo 상태 업데이트
        setTodos((prevTodos) => ({
          ...prevTodos,
          [categoryName]: prevTodos[categoryName].map((t, i) => (i === index ? { ...t, name: newText, status } : t)),
        }));
      }
    } catch (error) {
      console.error("🚨 Todo 저장 실패:", error);
    }
  };

  const deleteTodo = async (categoryId, todoId) => {
    if (!todoId) {
      console.error("🚨 deleteTodo 호출 시 todoId가 없음! categoryId:", categoryId);
      return;
    }
    try {
      const accessToken = localStorage.getItem("accessToken");

      // 🛠️ 서버에서 삭제 요청
      await axiosInstance.delete(`/api/v0/todos/${todoId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      console.log("✅ Todo 삭제 성공:", todoId);

      // 🔥 UI에서도 즉시 삭제
      setTodos((prevTodos) => {
        const updatedTodos = { ...prevTodos };
        for (const categoryName in updatedTodos) {
          updatedTodos[categoryName] = updatedTodos[categoryName].filter((todo) => todo.todoId !== todoId);
        }
        return updatedTodos;
      });
    } catch (error) {
      console.error("🚨 Todo 삭제 실패:", error);
    }
  };

  const handleTimeUpdate = async (todoId, startTime, endTime) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axiosInstance.patch(
        `/api/v0/todos/${todoId}`,
        {
          startTime,
          endTime,
          date,
        },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      console.log("✅ Time update 성공:", response.data);

      // 프론트엔드 상태 업데이트
      setTodos((prevTodos) => {
        const updatedTodos = { ...prevTodos };
        for (const categoryName in updatedTodos) {
          updatedTodos[categoryName] = updatedTodos[categoryName].map((todo) =>
            todo.todoId === todoId ? { ...todo, startTime, endTime } : todo
          );
        }
        return updatedTodos;
      });
    } catch (error) {
      console.error("🚨 Time update 실패:", error);
    }
  };

  return (
    <S.DailyContainer className="ImgContainer">
      <S.DateWrapper>
        <ShowDate date={date} onDateChange={handleDateChange} />
      </S.DateWrapper>
      <S.DataContainer>
        {isLoading && <p>Loading...</p>}
        <S.TodoCategoryContainer>
          {categories.map((category) => (
            <div key={category.categoryId}>
              <TodoCategoryBtn
                defaultValue={category.categoryName}
                color={category.color}
                onAddTodo={() => handleAddTodoDirectly(category.categoryName)}
              />
              <TodoLists
                todos={todos[category.categoryName]}
                onTodoTextChange={(index, newText, status) =>
                  handleTodoTextChange(
                    category.categoryName,
                    index,
                    newText,
                    status,
                    todos[category.categoryName][index]?.todoId
                  )
                }
                onDeleteTodo={deleteTodo}
                category={category}
                date={date}
                onTimeUpdate={handleTimeUpdate}
                fetchTodos={fetchTodos}
              />
            </div>
          ))}
        </S.TodoCategoryContainer>

        <S.Line />

        <S.ChartContainer>
          {isDailyLoading ? (
            <ChartSkeleton />
          ) : error ? (
            <p>🥲데이터를 가져오는 중 오류 발생</p>
          ) : (
            <div>
              <PieList date={dailyDate} data={data} balance={balance} />
            </div>
          )}
        </S.ChartContainer>
      </S.DataContainer>

      <ImgSave />
    </S.DailyContainer>
  );
};

export default Todo;
