



import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Link } from "react-router-dom";
import PerformanceBarChart from "./Performance";
import VennDiagram from "./VennDiagram";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Home = () => {
  const { data } = useSelector((state) => state.data);
  const [totalSales, setTotalSales] = useState(0);
  const [totalMember, setTotalMember] = useState(0);

  useEffect(() => {
    const total = data.reduce((sum, item) => sum + Number(item.amount), 0);
    const totalMember = new Set(data.map((item) => item.id)).size;

    setTotalSales(total);
    setTotalMember(totalMember);
  }, [data]);

  const barChartData = {
    labels: data.map((item) => `${item.month}`),
    datasets: [
      {
        label: "Treatment Cost",
        data: data.map((item) => item.sales),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const pieChartData = {
    labels: data.map((item) => `${item.month}`),
    datasets: [
      {
        label: "Sales Distribution",
        data: data.map((item) => item.sales),
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
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#0b1e3b",
        color: "white",
      }}
    >
      {/* Sidebar */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#135cdc",
            color: "white",
            marginTop: "95px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <Typography variant="h5">Creative Tim</Typography>
          </ListItem>
          <Divider />
          <ListItem button>
            <Link to="/table">
              <ListItemText primary="Tables" color="white" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/form">
              <ListItemText primary="Form" color="white" />
            </Link>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 2, padding: 4, marginTop: 9 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "#123a63",
                color: "white",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Total Amount</Typography>
              <Typography variant="h4">{totalSales}</Typography>
              <Typography variant="body2" color="green">
                This Month
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "#123a63",
                color: "white",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Total Members</Typography>
              <Typography variant="h4">{totalMember}</Typography>
              <Typography variant="body2" color="green">
                This Month
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <PerformanceBarChart />
        </Grid>

        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "#1a3a5c",
                color: "white",
                textAlign: "center",
                height:340
              }}
            >
              <Typography variant="h6">Amount Overview</Typography>
              <Bar data={barChartData} options={chartOptions} />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "#1a3a5c",
                color: "white",
                textAlign: "center",
                height:340
              }}
            >
              <Typography variant="h6">Distribution</Typography>
              <Pie
                data={pieChartData}
                style={{
                  width: "200px",
                  height: "300px",
                  margin: "0 auto",
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper
              sx={{
                padding: 3,
                backgroundColor: "#1a3a5c",
                color: "white",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Sales</Typography>
              <VennDiagram
                style={{
                  width: "200px",
                  height: "202px",
                  margin: "0 auto",
                  marginTop: "10px",
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
