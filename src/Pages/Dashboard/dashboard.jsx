import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Container, Typography, Grid, Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const Dashboard = () => {
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [30, 45, 60, 70, 55, 90, 80, 60, 54, 78, 23, 56],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Revenue",
        data: [1500, 2000, 1800, 2200],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const profitLossData = [
    { label: "Profit Percentage", value: "15%" },
    { label: "Loss Percentage", value: "5%" },
    { label: "Net Gain", value: "10%" },
  ];

  return (
    <main style={{ padding: 20 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          <b>Dashboard</b>
        </Typography>
        <Grid container spacing={3}>
          {profitLossData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper style={{ padding: 16, textAlign: "center" }}>
                <Typography variant="h6">{item.label}</Typography>
                <Typography variant="h4">{item.value}</Typography>
              </Paper>
            </Grid>
          ))}
          <Grid item xs={12} lg={6}>
            <Paper style={{ padding: 16, textAlign: "center" }}>
              <Typography variant="h6">Sales Overview</Typography>
              <Bar data={barData} options={{ responsive: true }} />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper style={{ padding: 16, textAlign: "center" }}>
              <Typography variant="h6">Revenue Trend</Typography>
              <Line data={lineData} options={{ responsive: true }} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Dashboard;
