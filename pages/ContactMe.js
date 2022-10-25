import React from "react";
import Navbar from "../components/Navbar";
export async function getStaticProps() {
  const pages = ["Projects", "About Me"];
  const settings = ["Profile", "Dashboard", "SignUp", "Login", "Logout"];
  return {
    props: {
      pages,
      settings,
    },
  };
}
const ContactMe = (props) => {
  return (
    <div>
      <Navbar {...props} />
      ContactMe
    </div>
  );
};

export default ContactMe;
