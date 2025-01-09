import { useEffect, useState } from "react";
import { Box, Grid, Typography, Paper, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Drawer } from "@mui/material";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Link } from 'react-router-dom';
import PerformanceBarChart from "./Performance";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Home = () => {
  const { data } = useSelector((state) => state.data); 
  const [totalSales, setTotalSales] = useState(0);
  const [totalMember, setTotalMember] = useState(0);



  useEffect(() => {
    const total = data.reduce((sum, item) => sum + Number(item.sales), 0);
    const totalMember = data.reduce((sum, item) => sum + Number(item.id), 0);
    setTotalSales(total);
    setTotalMember(totalMember);
  }, [data]);


  const barChartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Sales Overview",
        data: data.map((item) => item.amount),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  // Pie Chart Data (for example purposes, sales categories)
  const pieChartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: "Sales Distribution",
        data: data.map((item) => item.amount),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
    },
    scales: {
      x: { title: { display: true, text: "Months" } },
      y: { title: { display: true, text: "Sales" }, beginAtZero: true },
    },
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#0b1e3b", color: "white" }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#111927",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <Typography variant="h5">
              Dashboard
            </Typography>
          </ListItem>
          <Divider />
          <ListItem button>
          <Link to="/table">
            <ListItemText primary="Tables" />
            </Link>
          </ListItem>
          <ListItem button>
          <Link to="/form">
            <ListItemText primary="Form" />
            </Link>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 2, padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={8} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: "#123a63", color: "white", textAlign: "center" }}>
              <Typography variant="h6">Total Amount</Typography>
              <Typography variant="h4">{totalSales}</Typography>
              <Typography variant="body2" color="green">This Month</Typography>
            </Paper>
          </Grid>
          <Grid item xs={8} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: "#123a63", color: "white", textAlign: "center" }}>
              <Typography variant="h6">Total Member</Typography>
              <Typography variant="h4">{ totalMember}</Typography>
              <Typography variant="body2" color="green">This Month</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <PerformanceBarChart/>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: "#1a3a5c", color: "white", textAlign: "center" }}>
              <Typography variant="h6">Amount Overview</Typography>
              <Bar data={barChartData} options={chartOptions} />
            </Paper>
          
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: 3, backgroundColor: "#1a3a5c", color: "white", textAlign: "center" }}>
              <Typography variant="h6">Distribution</Typography>
              <Pie data={pieChartData}  style={{
        width: "200px", 
        height: "350px", 
        margin: "0 auto", 
      }} />
            </Paper>
          </Grid>
        </Grid>
       
      </Box>
    </Box>
  );
};

export default Home;

