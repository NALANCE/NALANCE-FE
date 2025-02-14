import { useNavigate } from 'react-router-dom';
import PageTitle from '../common/PageTitle/PageTitle';
import * as S from './Topbar.style';
import back from 'assets/icons/back.svg';
import topbarFish from 'assets/icons/topbar_fish.svg';
import topbarLogo from 'assets/icons/topbar_Logo.svg';

const Topbar = ({ pageTitle }) => {
  const navigate = useNavigate();

  const handleMoveToMypage = () => {
    navigate(`/mypage`);
  };

  return (
    <>
      <S.TopIcons>
        <img src={topbarFish} alt="Topbar Fish" />
        <img src={topbarLogo} alt="Topbar Logo" />
      </S.TopIcons>
      <S.Container>
        <S.BackBtn onClick={handleMoveToMypage}>
          <img src={back}></img>
        </S.BackBtn>
        <PageTitle pageTitle={pageTitle} />
      </S.Container>
    </>
  );
};

export default Topbar;
