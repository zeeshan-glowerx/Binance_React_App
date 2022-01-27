import React from 'react'
import {Box,TextField,Button} from "@mui/material";
import "./index.css"
const LoginForm = ({ handleFormSubmit }) => {
    return (
        <form onSubmit={handleFormSubmit} className="login__card-container__form">
         
        <label className="login__card-container__form__label">Email</label>
        <Box sx={{ mb: "0.5rem" }} />
        <TextField name="email_or_username" label="" placeholder="Email or Username" fullWidth={true} />
        <Box sx={{ mb: "1.5rem" }} />
        <label className="login__card-container__form__label">Password </label>
        <Box sx={{ mb: "0.5rem" }} />
        <TextField name="password" label="" type="password" placeholder="Password" fullWidth={true}/>
        <Box sx={{ mb: "2rem" }} />
        <Button  type="submit"  fullWidth color="warning" variant="contained" >Login</Button>
      </form>
    )
}

export default LoginForm
