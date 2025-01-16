import ShowDate from "components/ShowDate/ShowDate.jsx";
import PieChart from "components/PieChart/PieChart";
import PieList from "components/PieList/PieList";
import * as S from "./Daily.style";

const Dailly = () => {
  return (
    <S.DailyContainer>
      <ShowDate />
      <PieChart />
      <PieList />
    </S.DailyContainer>
  );
};

export default Dailly;
