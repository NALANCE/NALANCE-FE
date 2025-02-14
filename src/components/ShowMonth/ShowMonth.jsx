import * as S from "./ShowMonth.style";

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
      <S.ItemWrapper>
        <S.DateContainer>
          <p>{monthNames[month].toUpperCase()}</p>
        </S.DateContainer>

        <S.Line />
      </S.ItemWrapper>
    </>
  );
};

export default ShowMonth;
