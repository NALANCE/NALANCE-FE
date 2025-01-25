import React, { useState, useRef, useEffect } from "react";
import { IgrItemLegend } from "igniteui-react-charts";
import { IgrItemLegendModule } from "igniteui-react-charts";
import { IgrPieChart } from "igniteui-react-charts";
import { IgrPieChartModule } from "igniteui-react-charts";

IgrPieChartModule.register();
IgrItemLegendModule.register();

const PieChart = ({ date }) => {
  const [data, setData] = useState([
    { MarketShare: 37, Company: "Space Cooling", Summary: "Space Cooling 37%" },
    { MarketShare: 25, Company: "Residential Appliance", Summary: "Residential Appliance 25%" },
    { MarketShare: 12, Company: "Heating", Summary: "Heating 12%" },
    { MarketShare: 8, Company: "Lighting", Summary: "Lighting 8%" },
    { MarketShare: 18, Company: "Other Services", Summary: "Other Services 18%" },
  ]);

  const chartRef = useRef(null);
  const legendRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && legendRef.current) {
      chartRef.current.legend = legendRef.current;
    }
  }, []);

  const onSliceClick = (s, e) => {
    e.isExploded = !e.isExploded;
  };

  return (
    <div className="container sample">
      <label className="legend-title">Global Electricity Demand by Energy Use</label>
      <div className="options vertical">
        <IgrItemLegend ref={legendRef} orientation="Horizontal" />
      </div>

      <div className="container">
        <IgrPieChart
          dataSource={data}
          ref={chartRef}
          labelMemberPath="Summary"
          valueMemberPath="MarketShare"
          legendLabelMemberPath="Company"
          width="100%"
          height="100%"
          labelsPosition="OutsideEnd"
          labelExtent="30"
          explodedRadius={0.2}
          explodedSlices="1"
          allowSliceExplosion="true"
          radiusFactor={0.7}
          sliceClick={onSliceClick}
          startAngle={-60}
        />
      </div>
    </div>
  );
};

export default PieChart;
