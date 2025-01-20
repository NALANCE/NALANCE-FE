import ShowMonth from "components/ShowMonth/ShowMonth";
import MonthlyChart from "components/MonthlyChart/MonthlyChart";
import Calendar from "components/Calendar/Calendar";
import ImgSave from "components/ImgSave/ImgSave";

import useDate from "hooks/useDate";

import { DailyContainer } from "pages/Daily/Daily.style.js";

const Monthly = () => {
  const [date, handleDateChange] = useDate();

  return (
    <DailyContainer className="ImgContainer">
      <ShowMonth />
      <MonthlyChart date={date} />
      <Calendar date={date} onDateChange={handleDateChange} />
      <ImgSave />
    </DailyContainer>
  );
};

export default Monthly;
