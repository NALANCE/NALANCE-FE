import * as S from "./PageTitle.style";

const PageTitle = ({ pageTitle }) => {
  return (
    <>
      <S.TitleContainer>
        <S.Title>{pageTitle}</S.Title>
      </S.TitleContainer>
    </>
  );
};

export default PageTitle;
