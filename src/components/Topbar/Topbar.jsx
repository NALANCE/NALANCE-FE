import { useNavigate } from "react-router-dom";
import PageTitle from "../common/PageTitle.jsx/PageTitle";
import * as S from "./Topbar.style";
import back from "assets/icons/back.svg";

const Topbar = ({ pageTitle }) => {
  const navigate = useNavigate();

  const handleMoveToMypage = () => {
    navigate(`/mypage`);
  };

  return (
    <>
      <div>
        <S.BackBtn onClick={handleMoveToMypage}>
          <img src={back}></img>
        </S.BackBtn>
        <PageTitle pageTitle={pageTitle} />
      </div>
    </>
  );
};

export default Topbar;
