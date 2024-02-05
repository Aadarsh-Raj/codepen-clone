import React,{useEffect} from 'react'
import "./Style/login.css"
import { ReactComponent as GoogleIcon } from "../Assests/googleicon.svg";
import { ReactComponent as Icon } from "../Assests/icon.svg";
import Footer from './Footer';
import {signInWithGoogle} from "../Utils/helper"
import { Navigate, useNavigate } from 'react-router-dom';
import {auth} from "../Config/firebase.config"
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred?.providerData[0].email) {
        console.log(userCred);
      } else {
        navigate("/login", { replace: true });
      }
    });
    
  }, []);


  return (
    <>
    <div className="login-container"> 
        <div className="oneclicklogin">
          
        <button className='submit-btn' onClick={signInWithGoogle}><GoogleIcon /> Log In with Google</button>

        </div>
        <div className="or-container">
            <p><hr /> </p><p className="or-para">OR</p>
            <p><hr /></p>
        </div>
        <div className="formlogin-container">
            <form action="" className='login-form'>
                
                <input type="text" placeholder='Enter Username or Email'/>
                <input type="text" placeholder='Enter Password' />
                <button className='submit-btn'>Submit</button>
            </form>
            <div className='forgetpass-para'>Forget Password</div>
        </div>
    </div>
        <footer>
          <Footer />
        </footer>
    </>
  )
}

export default Login
