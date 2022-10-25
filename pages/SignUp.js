import React from "react";
import Navbar from "../components/Navbar";
import SERVER_URL from "../src/config/index";

import { Box, Button, TextField, FormControl } from "@mui/material";
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

      <Box textAlign="center">
        <FormControl
          action={SERVER_URL}
          method="post"
          component="form"
          sx={{ my: 1 }}
        >
          <TextField sx={{ my: 1 }} required label="Name" type="text" />

          <TextField sx={{ my: 1 }} required label="Username" type="text" />

          <TextField sx={{ my: 1 }} required label="Email" type="email" />

          <TextField sx={{ my: 1 }} required label="Password" type="password" />

          <TextField sx={{ my: 1 }} required label="Phone" type="text" />

          <TextField sx={{ my: 1 }} required label="Address" type="text" />

          <Button sx={{ my: 1, p: 1 }} type="submit" variant="outlined">
            SignUp
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default SignUp;
