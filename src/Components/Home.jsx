import React from "react";
import Footer from "./Footer";
import "./Style/home.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { UserFunction } from "../Context/UserContext";
import Sidebar from "./Sidebar";
import UploadedCodesContainer from "./UploadedCodesContainer";
const Home = () => {
  const userCtx = UserFunction();
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="home-page-header">
          <SearchBar />
        </div>
        <div className="home-content" style={{ textAlign: "center" }}>
          {!userCtx.user ? (
            <div> Please Log in to use Editor </div>
          ) : (
            <div>
              Hello <span>{userCtx.displayName}</span>, Thanks For Using our
              website{" "}
            </div>
          )}
        </div>
        {
          userCtx.user && (<UploadedCodesContainer />)
        }
        
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
