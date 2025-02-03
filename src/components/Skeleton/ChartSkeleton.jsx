import ReactApexChart from "react-apexcharts";
import * as S from "./ChartSkeleton.style";

const ChartSkeleton = () => {
  return (
    <S.SkeletonContainer>
      <S.SkeletonCircle />
      <S.SkeletonBox />
      <S.SkeletonCat />
    </S.SkeletonContainer>
  );
};

export default ChartSkeleton;
