import React from "react";
import { Grid, Box } from "@mui/material";
import { useHistory } from "react-router";
import { getExchangeInfo } from "../../api/exchangeInfo";
import "./index.css";
// Custom components
import LoginForm from "../../components/Forms/Login";

const Login = () => {
  const { replace } = useHistory();

  const handleFormSubmit = async (data) => {
    replace("/");
  };
  return (
    <div className="full-page full-page__page-center">
      <Grid item={true} xs={10} sm={8} md={6} lg={4}>
        <Box sx={{ m: "1.8rem" }} />
        <div className="h2 login__heading">
          <img src="/Binance-Logo.wine.svg" width={150} alt="binance" />
        </div>
        <div className="login__card-container">
          <span className="login__card-container__heading">
            Sign in to your account
          </span>
          <Box sx={{ m: "1.5rem" }} />
          <LoginForm handleFormSubmit={handleFormSubmit} />
        </div>
      </Grid>
    </div>
  );
};

export default Login;
