import React from "react";
import Navbar from "../components/Navbar";

import { Box, Typography, TextField } from "@mui/material";
export async function getStaticProps() {
  const settings = ["Login"];
  return {
    props: {
      settings,
    },
  };
}
const SignUp = (props) => {
  return (
    <>
      <Navbar {...props} />

      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            my: 2,

            width: "25ch",
          },
          textAlign: "center",
          my: 5,
        }}
      >
        <TextField
          required
          id="password"
          label="Email"
          type="email"
          autoComplete="current-password"
        />
        <br />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </Box>
    </>
  );
};

export default SignUp;
