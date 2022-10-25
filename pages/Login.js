import React from "react";
import { getCsrfToken } from "next-auth/react";
import { Box, FormControl, Button, TextField } from "@mui/material";
import Navbar from "../components/Navbar";

export async function getServerSideProps(context) {
  const pages = ["Projects", "About Me", "Contact Me"];
  const settings = ["Profile", "Dashboard", "SignUp", "Logout"];
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      pages,
      settings,
    },
  };
}
const Login = (props) => {
  const { csrfToken } = props;
  return (
    <div>
      <Navbar {...props} />

      <Box textAlign="center" sx={{ p: 10 }}>
        <FormControl
          action="/api/auth/callback/credentials"
          method="post"
          component="form"
          sx={{ my: 1 }}
        >
          {/* <Input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <TextField
            sx={{ my: 1 }}
            label="Email"
            name="email"
            type="email"
          ></TextField>
          <TextField
            sx={{ my: 1 }}
            label="Password"
            name="password"
            type="password"
          ></TextField>
          <Button sx={{ my: 1, p: 1 }} variant="outlined" type="submit">
            signIn
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default Login;
