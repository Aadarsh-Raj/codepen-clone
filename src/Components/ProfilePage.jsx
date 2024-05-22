import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { UserFunction } from "../Context/UserContext";
import { logoutUser } from "../Utils/helper";
import "./Style/profilepage.css";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
const ProfilePage = () => {
  const navigate = useNavigate();
  const userCtx = UserFunction();
  const [creationList, setCreationList] = useState([]);
  async function logOut() {
    await logoutUser();
    await userCtx.setDialogMessage("You are logged out");
    await userCtx.setDialogAppear(true);
    navigate("/home");
  }
  useEffect(() => {
    filterCreations();
  }, [userCtx.dialogAppear]);
  const filterCreations = () => {
    const result = userCtx.codeArray.filter((ele) =>
      ele.user.toLowerCase().includes(userCtx.userEmail)
    );
    setCreationList(result);
  };
  return (
    <>
      <SearchBar />
      <Sidebar />
      <div className="profile-container">
        <div className="profile-inner-container">
          <div className="profile-image-container">
            <img src={userCtx.profileUrl} alt="User Profile" />
          </div>
          <div className="profile-more-details">
            <p>
              <span>Name:</span> {userCtx.displayName}
            </p>
            <p>
              <span>Email:</span> {userCtx.userEmail}
            </p>
          </div>
          <div className="creations-container">
            <h4>Your Creations: </h4>
            {creationList.length > 0 ? (
              <ul>
                {creationList.map((ele) => (
                  <Link
                    to={`/editor/${ele.id}`}
                    state={{ title: ele.title, code: ele.code, id: ele.id }}
                    key={ele.id}
                  >
                    <li>{ele.title}</li>
                  </Link>
                ))}
              </ul>
            ) : (
              <Link to="/editor"><span style={{color:"green", fontWeight:"bolder"}}>Create One</span></Link>
            )}
          </div>
          <div className="logout-btn">
            <button onClick={logOut}>Log Out</button>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default ProfilePage;
