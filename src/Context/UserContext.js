import { createContext, useContext, useEffect, useState } from "react";
import {auth, onAuthStateChanged } from "../Config/firebase.config";
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
    useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
          setUser(true);
          setDisplayName(user.displayName);
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
  };

  return (
    <UserContextController.Provider value={functionObject}>
      {children}
    </UserContextController.Provider>
  );
};
export { UserContext };
