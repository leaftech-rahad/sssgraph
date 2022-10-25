import React from "react";
import Navbar from "../components/Navbar";
import { getCsrfToken } from "next-auth/react";
import { Box, FormControl, Button, Typography } from "@mui/material";

export async function getServerSideProps(context) {
  const pages = ["Projects", "About Me", "Contact Me"];
  const settings = ["Profile", "Dashboard", "SignUp", "Login"];
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      pages,
      settings,
    },
  };
}
const Logout = (props) => {
  const { csrfToken } = props;
  return (
    <div>
      <Navbar {...props} />
      {/* <form method="post" action="/api/auth/signout">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <h1>Logout</h1>
        <p>Are you sure you want to Logout?</p>
        <button type="submit">Logout</button>
      </form> */}
      <Box textAlign="center" sx={{ p: 10 }}>
        <FormControl
          action="/api/auth/signout"
          method="post"
          component="form"
          sx={{ my: 1 }}
        >
          <Typography variant="h4" sx={{ my: 1, p: 1 }}>
            Logout
          </Typography>
          <Typography variant="body1" sx={{ my: 1, p: 1 }}>
            Are you sure you want to Logout?
          </Typography>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <Button sx={{ my: 1, p: 1 }} variant="outlined" type="submit">
            Logout
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default Logout;
