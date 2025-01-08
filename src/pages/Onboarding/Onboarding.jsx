import onboarding1 from "assets/icons/onboarding1.svg";
import onboarding2 from "assets/icons/onboarding2.svg";
import onboarding_logo from "assets/icons/onboarding_logo.svg";
import onboarding_cat from "assets/icons/onboarding_cat.svg";
import RoundBtn from "components/RoundBtn/RoundBtn";

const Onboarding = () => {
  return (
    <>
      <div>
        {/* 말풍선 */}
        <div>
          <div>
            <img src={onboarding1} />
          </div>
          <div>
            <img src={onboarding2} />
          </div>
        </div>

        {/* 로고 */}
        <div>
          <div>
            <img src={onboarding_logo} />
          </div>
          <div>
            <img src={onboarding_cat} />
          </div>

          {/* 버튼 */}

          <RoundBtn></RoundBtn>
          <RoundBtn></RoundBtn>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
