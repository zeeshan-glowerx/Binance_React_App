import React from "react";
import Layout from "../../components/Layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import { Card, CardContent, Grid } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const Report = () => {
  const DoughnutChart = () => {
    const data = {
      labels: ["BTC", "MIOTA", "ETH", "LTC", "ADA"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            "#FFC600",
            "rgb(23, 39, 116, 0.7)",
            "rgb(28, 121, 71,0.9)",
            "rgb(0, 54, 56, 0.8)",
            "rgb(241, 74, 22,0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(23, 39, 116, 1)",
            "rgba(28, 121, 71, 1)",
            "rgba(0, 54, 56, 1)",
            "rgba(241, 74, 22, 1)",
          ],
          borderWidth: 1,
          cutout: "63%",
        },
      ],
    };
    return <Doughnut data={data} />;
  };

  const PieChart = () => {
    const data = {
      labels: ["Binance", "Coin Base", "Coin Base Pro", "Crypto.com"],
      datasets: [
        {
          label: "Price",
          data: [12, 12, 8, 6],
          backgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgb(7, 34, 39,0.8)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgb(7, 34, 39, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    return <Pie data={data} />;
  };

  return (
    <Layout activeItem={"Report"}>
      <Grid container>
        <Card
          sx={{ minWidth: 245, margin: "0 auto", border: "1px #D3D3D3 solid" }}
        >
          <Grid item sx={12} md={6}>
            <CardContent>
              <div style={{ width: "300px", margin: "auto" }}>
                <DoughnutChart />
              </div>
            </CardContent>
          </Grid>
        </Card>
        <Card
          sx={{ minWidth: 245, margin: "auto", border: "1px #D3D3D3 solid" }}
        >
          <Grid item sx={12} md={6}>
            <CardContent>
              <div style={{ width: "300px", margin: "auto" }}>
                <PieChart />
              </div>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </Layout>
  );
};

export default Report;
