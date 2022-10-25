import React from "react";
import Navbar from "../components/Navbar";

import { Box, TextField } from "@mui/material";
export async function getStaticProps() {
  const pages = ["Projects", "About Me", "Contact Me"];
  const settings = ["Profile", "Dashboard", "Login", "Logout"];
  return {
    props: {
      pages,
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
