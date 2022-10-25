import React from "react";
import Navbar from "../components/Navbar";
export async function getStaticProps() {
  const pages = ["About Me", "Contact Me"];
  const settings = ["Profile", "Dashboard", "SignUp", "Login", "Logout"];
  return {
    props: {
      pages,
      settings,
    },
  };
}
const Projects = (props) => {
  return (
    <div>
      <Navbar {...props} />
      Projects
    </div>
  );
};

export default Projects;
