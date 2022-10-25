import React from "react";
import Navbar from "../components/Navbar";
export async function getStaticProps() {
  const pages = ["Projects", "About Me", "Contact Me"];
  const settings = ["Profile", "SignUp", "Login", "Logout"];
  return {
    props: {
      pages,
      settings,
    },
  };
}
const Dashboard = (props) => {
  return (
    <div>
      <Navbar {...props} />
      Dashboard
    </div>
  );
};

export default Dashboard;
