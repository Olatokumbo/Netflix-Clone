import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const options = {
  scales: {
    xAxes: [
      {
        stacked: true,
        gridLines: {
            display: false,
          },
      },
    ],
    yAxes: [
      {
        stacked: true,
        gridLines: {
            display: false,
          },
      },
    ],
  },
  legend: {
    display: false
 },
};

const data = {
  labels: ["ReactJS", "NodeJS", "Git", "Figma/Photoshop", "Firebase", "HTML"],
  datasets: [
    {
      label: "Skills",
      data: [100, 80, 78, 50, 89, 95],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.9)",
      borderColor: "rgba(15,192,192,1)",
    },
  ],
};

const BarGraph = () => {
  return (
    <div>
      <HorizontalBar data={data} options={options} width={"30%"} height={"11%"}/>
    </div>
  );
};

export default BarGraph;
