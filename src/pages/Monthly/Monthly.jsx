import ShowMonth from "components/ShowMonth/ShowMonth";
import MonthlyChart from "components/MonthlyChart/MonthlyChart";
import ImgSave from "components/ImgSave/ImgSave";

import { DailyContainer } from "pages/Daily/Daily.style.js";

const Monthly = () => {
  return (
    <DailyContainer className="ImgContainer">
      <ShowMonth />
      <MonthlyChart />
      <ImgSave />
    </DailyContainer>
  );
};

export default Monthly;
