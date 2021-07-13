import React from "react";
import BarChart from "../chart/BarChart";
import LineChart from "../chart/LineChart";
import PieChart from "../chart/PieChart";

export default function Charts() {
  return (
    <>
      <BarChart />
      <LineChart/>
      <PieChart/>
    </>
  );
}
