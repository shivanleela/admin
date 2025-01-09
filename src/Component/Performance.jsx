
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "JAN", value: 100 },
  { month: "FEB", value: 80 },
  { month: "MAR", value: 70 },
  { month: "APR", value: 90 },
  { month: "MAY", value: 75 },
  { month: "JUN", value: 95 },
  { month: "JUL", value: 85 },
  { month: "AUG", value: 80 },
  { month: "SEP", value: 90 },
  { month: "OCT", value: 100 },
  { month: "NOV", value: 110 },
  { month: "DEC", value: 100 },
];

const PerformanceBarChart = () => {
  return (
    <div style={{ margin: "50px", background: "#1e293b", padding: "20px", borderRadius: "8px" }}>
      <h2 style={{ color: "white", textAlign: "center" }}>Total Performance</h2>
      <BarChart width={1000} height={300} data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" stroke="white" />
        <YAxis stroke="white" />
        <Tooltip />
        <Bar dataKey="value" fill="#00bfff" barSize={20} radius={[5, 5, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default PerformanceBarChart;
