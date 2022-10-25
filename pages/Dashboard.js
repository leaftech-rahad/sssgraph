import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@mui/material";

import { dehydrate, useQuery } from "react-query";
import { queryClient, getUser } from "../src/api";

export async function getServerSideProps(req, res) {
  await queryClient.prefetchQuery(["getUser"], () =>
    getUser({ input: { username: "Alice" } })
  );
  const pages = ["Projects", "About Me", "Contact Me"];
  const settings = ["Profile", "SignUp", "Login", "Logout"];
  return {
    props: {
      pages,
      settings,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
const Dashboard = (props) => {
  const { data } = useQuery(["getUser"], () =>
    getUser({ input: { username: "Alice" } })
  );

  return (
    <div>
      <Navbar {...props} />
      <Box textAlign="center">
        <Typography variant="body1"> {data?.findUser?.id}</Typography>
        <Typography variant="body1">name {data?.findUser?.name}</Typography>
        <Typography variant="body1">email {data?.findUser?.email}</Typography>
        <Typography variant="body1">
          username {data?.findUser?.username}
        </Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
