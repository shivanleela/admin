// import React from "react";
import { Paper, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const SalesChart = ({ salesData }) => {
  const chartData = {
    labels: salesData.map((data) => data.month),
    datasets: [
      {
        label: "Sales Report",
        data: salesData.map((data) => data.sales),
        backgroundColor: "rgba(54, 162, 235, 0.8)",
      },
    ],
  };

  return (
    <Paper elevation={3} sx={{ padding: 2 }} style={{width:1000,height:600}}>
      <Typography variant="h6" gutterBottom>
        Sales Chart
      </Typography>
      <Bar data={chartData} />
    </Paper>
  );
};

export default SalesChart;
