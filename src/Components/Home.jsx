import React from "react";
import Footer from "./Footer";
import "./Style/home.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { UserFunction } from "../Context/UserContext";
import Sidebar from "./Sidebar";
const Home = () => {
  const userCtx = UserFunction();
  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="home-page-header">
          <SearchBar />
        </div>
        <div style={{ textAlign: "center" }}>
          {!userCtx.user ? (
            <div> Please Log in to use Editor </div>
          ) : (
            <div> Thanks for using us, {userCtx.displayName} </div>
          )}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
