import React from "react";
import Navbar from "../components/Navbar";

export async function getStaticProps() {
  const pages = ["Projects", "Contact Me"];
  const settings = ["Profile", "Dashboard", "SignUp", "Login", "Logout"];
  return {
    props: {
      pages,
      settings,
    },
  };
}

const AboutMe = (props) => {
  return (
    <div>
      <Navbar {...props} />
      AboutMe
    </div>
  );
};

export default AboutMe;
