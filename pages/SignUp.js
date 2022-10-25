import * as React from "react";
import Navbar from "../components/Navbar";

import { useMutation } from "react-query";
import { createUser } from "../src/api";

import { Box, Button, TextField, FormControl } from "@mui/material";
export async function getServerSideProps() {
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
  const [name, setname] = React.useState("");
  const [username, setusername] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [address, setaddress] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [role, setrole] = React.useState("");
  const input = { name, username, email, password, address, phone, role };
  const { mutate, data } = useMutation(["createUser"], () =>
    createUser({
      input: input,
    })
  );

  const submitUser = () => {
    mutate();
  };

  if (data) return <>created user</>;
  return (
    <>
      <Navbar {...props} />

      <Box textAlign="center">
        <FormControl
          // action={SERVER_URL}
          // method="post"
          // component="form"
          sx={{ my: 1 }}
        >
          <TextField
            sx={{ my: 1 }}
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />

          <TextField
            sx={{ my: 1 }}
            label="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <TextField
            disabled
            sx={{ my: 1 }}
            label="Role"
            type="text"
            name="role"
            value="Member"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />

          <TextField
            sx={{ my: 1 }}
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />

          <TextField
            sx={{ my: 1 }}
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <TextField
            sx={{ my: 1 }}
            label="Phone"
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />

          <TextField
            sx={{ my: 1 }}
            label="Address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => {
              setaddress(e.target.value);
            }}
          />

          <Button
            sx={{ my: 1, p: 1 }}
            type="submit"
            variant="outlined"
            onClick={submitUser}
          >
            SignUp
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default SignUp;
