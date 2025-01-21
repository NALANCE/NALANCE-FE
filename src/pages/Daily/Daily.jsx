import ShowDate from "components/ShowDate/ShowDate.jsx";
import PieChart from "components/PieChart/PieChart";
import PieList from "components/PieList/PieList";
import ImgSave from "components/ImgSave/ImgSave";

import useDate from "hooks/useDate";

import * as S from "./Daily.style";

const Dailly = () => {
  const [date, handleDateChange] = useDate();

  return (
    <S.DailyContainer className="ImgContainer">
      <ShowDate date={date} onDateChange={handleDateChange} />
      <PieChart date={date} />
      <PieList date={date} />
      <ImgSave />
    </S.DailyContainer>
  );
};

export default Dailly;
