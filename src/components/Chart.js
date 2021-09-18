import React from "react";
import { ResponsivePie } from "@nivo/pie";


function Chart(props) {
  return (
    <div style={{
      textAlign: "center",
      width: "400px",
      height: "250px",
      marginTop: "50px"
    }}>
      <ResponsivePie
        data={props.data}
        innerRadius={0.6}
      />
    </div>
  );
}

export default Chart;