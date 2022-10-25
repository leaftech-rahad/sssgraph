import React from "react";
import Navbar from "../components/Navbar";
export async function getStaticProps() {
  const pages = ["Projects", "About Me", "Contact Me"];
  const settings = ["Dashboard", "SignUp", "Login", "Logout"];
  return {
    props: {
      pages,
      settings,
    },
  };
}
const Profile = (props) => {
  return (
    <div>
      <Navbar {...props} />
      Profile
    </div>
  );
};

export default Profile;
