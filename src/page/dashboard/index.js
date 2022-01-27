import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import Layout from '../../components/Layout'
import "./index.css"
const Dashboard = () => {
  const [data, setData] = useState([]);

  const fetchOrderInfo = async () => {
    const result = await fetch(
      "https://crypto-report-py.herokuapp.com/api/binance/account",
    );
    const json = await result.json();
    setData(json.data.balances);
  };

  const handleOnColor = (index)=>{
    switch (index) {
      case 0:
        return "#292b2c"
        break;     
         case 1:
        return "#f0ad4e"
        break;
          case 2:
        return "#5bc0de"
        break;
          case 3:
        return "#5cb85c"
        break;    
      default:
      return "#9c27b0"
        break;
    }

  }

  useEffect(() => {
    fetchOrderInfo();
  }, []);

  return (
    <div className="container">

    <Layout activeItem="Dashboard">
      <Grid container  spacing={1} justifyContent={"center"} margin={"auto"}  >
        {data.slice(0, 20).map((item, index) => (
          <Grid item xs={6} md={4}>
            <Card sx={{ minWidth: 245,margin:"0 auto",color:'white',backgroundColor:handleOnColor(Math.floor(Math.random() * 10)%4) }}>
            
              <CardContent>
               <Typography
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  component="div"
                >
                  <Typography variant="h5">Asset :</Typography>
                  <Typography variant="h6">{item.asset}</Typography>
                </Typography>
                <Typography
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  component="div"
                >
                  <Typography variant="h5">Free :</Typography>
                  <Typography variant="h6">{item.free}</Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
    </div>
  );
};

export default Dashboard;
