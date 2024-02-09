import { createContext, useContext, useEffect, useState } from "react";
import {auth, onAuthStateChanged } from "../Config/firebase.config";
const UserContextController = createContext({});

export const UserFunction = () => {
  return useContext(UserContextController);
};

const UserContext = ({children})=>{

    const [htmlValue, setHtmlValue] = useState("");
    const [cssValue, setCssValue] = useState("");
    const [jsValue, setJsValue] = useState("");
    const [output, setOutputValue] = useState("");
    const [user, setUser]= useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        console.log(user, "logged in");
        setUser(true);
      }else{
        console.log(user, "logged Out");
        setUser(false);
      }
    });
  },[auth]);
 
    const functionObject ={
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
       setToggleSidebar
    };
    
    return (
    <UserContextController.Provider value = {functionObject}>
            {children}
    </UserContextController.Provider>);

};
export {UserContext};