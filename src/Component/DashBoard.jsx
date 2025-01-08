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
        padding: 2,
        color: "black",
      }}
    >
      <Grid container spacing={2}>

        {/* Chart */}
        <Box
          sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "80vh" }}
        >
          <Typography variant="h4" gutterBottom>
            Admin Dashboard
          </Typography>
          <Grid container spacing={3}>
            {/* Sales Table */}
            <Grid item xs={12} md={6}>
              <SalesTable salesData={data} />
            </Grid>

            {/* Sales Form */}
            <Grid item xs={12} md={6}>
              <SalesForm addSalesData={data} />
            </Grid>

            {/* Sales Chart */}
            <Grid item xs={12}>
              <SalesChart salesData={data} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default Dashboard;
