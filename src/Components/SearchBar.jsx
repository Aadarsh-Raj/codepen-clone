import React from 'react'
import { ReactComponent as MyIcon } from "../Assests/logoicon.svg";
import { UserFunction } from '../Context/UserContext';
import "./Style/SearchBar.css"
import { Link } from 'react-router-dom';
const SearchBar = () => {
  const userCtx = UserFunction();

  return (
    <>
    <div className="search-bar-container">
        <div className="search-bar-logo">
        <MyIcon />
        </div>
        <div className="search-bar-form">
        <input type="text" placeholder='Search By Title' className='input-search'/>
        </div>
{
  userCtx.user ? (<Link to={"/profile"}>Profile</Link>) : (<Link to={"/login"} >Login </Link>)
}
    </div>
    
    </>
  )
}

export default SearchBar
