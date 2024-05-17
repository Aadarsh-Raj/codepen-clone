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
        <div className="profile-image-container">
          <img src={userCtx.profileUrl} alt="User Profile" />
        </div>
        <div className="profile-more-details">
        <p><span>Name:</span> {userCtx.displayName}</p>
        <p><span>Email:</span> {userCtx.userEmail}</p>
        </div>
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
