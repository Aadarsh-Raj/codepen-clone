import React from "react";
import SearchBar from "./SearchBar";
import "./Style/login.css";
import { ReactComponent as GoogleIcon } from "../Assests/googleicon.svg";
// import { signInWithGoogle, signUPWithEmail } from "../Utils/helper";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  function signUpWithEmailId(e) {
    e.preventDefault();
    const email = e.target.children[0].value;
    const password = e.target.children[1].value;
    const againPassword = e.target.children[2].value;
    if (password !== againPassword) {
      alert("Please Match Your Password");
      return;
    } else {
    //   signUPWithEmail(email, password);
      navigate("/home");
    }
  }
  return (
    <>
      <SearchBar />
      <div className="login-container">
        <div className="oneclicklogin">
          <button className="submit-btn" onClick={""}>
            <GoogleIcon /> Log In with Google
          </button>
        </div>
        <div className="or-container">
          <p>
            <hr />{" "}
          </p>
          <p className="or-para">OR</p>
          <p>
            <hr />
          </p>
        </div>
        <div className="formlogin-container">
          <h2>Sign Up</h2>
          <form action="" className="login-form" onSubmit={signUpWithEmailId}>
            <input type="text" placeholder="Enter Username or Email" />
            <input type="password" placeholder="Enter Password" />
            <input type="password" placeholder="Enter Password Again" />
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Signup;
