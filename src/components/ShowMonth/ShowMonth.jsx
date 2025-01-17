import * as S from "components/ShowDate/ShowDate.style";

const ShowMonth = () => {
  let date = new Date();
  let month = date.getMonth(); // 월

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <S.DateContainer>
        <p>{monthNames[month].toUpperCase()}</p>
      </S.DateContainer>
    </>
  );
};

export default ShowMonth;
