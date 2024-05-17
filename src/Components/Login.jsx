import React, { useEffect } from "react";
import "./Style/login.css";
import { ReactComponent as GoogleIcon } from "../Assests/googleicon.svg";
import { ReactComponent as Icon } from "../Assests/icon.svg";
import Footer from "./Footer";
import { signInWithGoogle, signInWithEmail } from "../Utils/helper";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
const Login = () => {
  const navigate = useNavigate();
const signInWithButton = async ()=>{
  try {
    await signInWithGoogle();
    navigate("/editor");
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
    navigate("/login");
  }
}
 async function logInWithEmailId(e) {
    e.preventDefault();
    const email = e.target.children[0].value;
    const password = e.target.children[1].value;
    try {
      await  signInWithEmail(email, password);
    navigate("/");
    } catch (error) {
        console.log(error);
        navigate("/")
    }
  }

  return (
    <>
      <SearchBar />
      <div className="login-container">
        <div className="oneclicklogin">
          <button className="submit-btn" onClick={signInWithButton}>
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
          <h2>Log In</h2>
          <form action="" className="login-form" onSubmit={logInWithEmailId}>
            <input type="text" placeholder="Enter Username or Email" />
            <input type="text" placeholder="Enter Password" />
            <button className="submit-btn">Submit</button>
          </form>
          <Link to={"/signup"}>
            <div className="forgetpass-para">Create New Account</div>
          </Link>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Login;
