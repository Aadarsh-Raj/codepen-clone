import React from "react";
import Footer from "./Footer";
import { UserFunction } from "../Context/UserContext";
import { logoutUser } from "../Utils/helper";
import "./Style/profilepage.css";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
  const navigate = useNavigate();
  const userCtx = UserFunction();
  function logOut() {
    logoutUser();
    navigate("/home");
  }
  return (
    <div className="profile-container">
      <div className="profile-inner-container">
        <h2>Hello {userCtx.displayName}</h2>

        <div className="logout-btn">
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProfilePage;
