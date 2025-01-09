
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

const SalesChart = () => {
  const { data } = useSelector((state) => state.data);

  const chartData = {
    labels: data.map((item) => item.month), 
    datasets: [
      {
        label: "Sales",
        data: data.map((item) => item.sales), 
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
      <h3>Sales Distribution</h3>
      <Pie data={chartData} />
    </div>
  );
};

export default SalesChart;
