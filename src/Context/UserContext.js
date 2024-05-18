import { createContext, useContext, useEffect, useState } from "react";
import {auth, onAuthStateChanged } from "../Config/firebase.config";
import MyProfileImage from "../Assests/defaultProfileImage.webp"
const UserContextController = createContext({});

export const UserFunction = () => {
  return useContext(UserContextController);
};

const UserContext = ({ children }) => {
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  const [output, setOutputValue] = useState("");
  const [user, setUser] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [displayName, setDisplayName] = useState("User");
  const [profileUrl, setProfileUrl] = useState("https://t3.ftcdn.net/jpg/02/09/95/42/360_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.webp");
  const [userEmail, setUserEmail] = useState("");
    useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          console.log(user)
          setUser(true);
          setDisplayName(user.displayName);
          user.photoURL && setProfileUrl(user.photoURL);
          setUserEmail(user.email);
        }else{
          console.log(user, "logged Out");
          setUser(false);
        }
      });
    },[UserFunction]);

  const functionObject = {
    htmlValue,
    setHtmlValue,
    cssValue,
    setCssValue,
    jsValue,
    setJsValue,
    output,
    setOutputValue,
    user,
    setUser,
    toggleSidebar,
    setToggleSidebar,
    displayName,
    setDisplayName,
    profileUrl,
    userEmail
  };

  return (
    <UserContextController.Provider value={functionObject}>
      {children}
    </UserContextController.Provider>
  );
};
export { UserContext };
