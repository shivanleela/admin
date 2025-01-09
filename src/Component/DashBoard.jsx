

import { Grid, Typography, Box } from "@mui/material";
import SalesTable from "./SalesTable";
import SalesForm from "./SalesFrom";
import SalesChart from "./SalesChart";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { data } = useSelector((state) => state.data);

  return (
    <Box
      sx={{
        backgroundColor: "#0b1e3b",
        minHeight: "100vh",
        padding: 3,
        color: "white",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          padding: 3,
          borderRadius: "8px",
          marginBottom: 3,
        }}
      >
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Admin Dashboard
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Grid container spacing={4}>
        {/* Sales Table */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              padding: 3,
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Sales Data Table
            </Typography>
            {data.length === 0 ? (
              <Typography variant="h6" color="textSecondary">
                No sales data available.
              </Typography>
            ) : (
              <SalesTable salesData={data} />
            )}
          </Box>
        </Grid>

        {/* Sales Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              padding: 3,
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Add New Sales
            </Typography>
            <SalesForm />
          </Box>
        </Grid>

        {/* Sales Chart */}
        <Grid item xs={12}>
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              padding: 3,
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Sales Chart
            </Typography>
            {data.length === 0 ? (
              <Typography variant="h6" color="textSecondary">
                No data to display on the chart.
              </Typography>
            ) : (
              <SalesChart salesData={data} />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
