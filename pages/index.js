import * as React from "react";
// import Typography from "@mui/material/Typography";
// import { dehydrate, useQuery } from "react-query";
// import { queryClient, getUsers } from "../src/api";
import Navbar from "../components/Navbar";

export async function getStaticProps() {
  // await queryClient.prefetchQuery(["getUsers"], () => getUsers());
  const pages = ["Projects", "About Me", "Contact Me"];
  const settings = ["Profile", "Dashboard", "SignUp", "Login", "Logout"];
  return {
    props: {
      // dehydratedState: dehydrate(queryClient),
      pages,
      settings,
    },
  };
}

function Appbar(props) {
  // const { data } = useQuery(["getUsers"], () => getUsers());

  return (
    <>
      <Navbar {...props} />
      {/* <div>
        {data?.allUsers.map((user, i) => (
          <Typography align="center" key={user.id}>
            {user.name}
          </Typography>
        ))}
      </div> */}
    </>
  );
}
export default Appbar;
