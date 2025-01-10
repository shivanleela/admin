
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const SalesChart = () => {
  const { data } = useSelector((state) => state.data);


  const chartData = {
    labels: data.map((item) => item.month), // Months as labels
    datasets: [
      {
        label: "Sales",
        data: data.map((item) => item.sales), // Sales as data
        backgroundColor: "#36A2EB",
        borderColor: "#007bff",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <h3>Sales Data (Bar Chart)</h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SalesChart;





