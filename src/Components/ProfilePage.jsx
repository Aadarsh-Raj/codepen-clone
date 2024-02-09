import React from 'react'
import Footer from './Footer'
import { UserFunction } from '../Context/UserContext';
import { logoutUser } from '../Utils/helper';
import "./Style/profilepage.css"
const ProfilePage = () => {
    function logOut(){
        console.log("logged Out");
logoutUser();
    }
  return (
    <div className='profile-container'>
     <h2>Hello User</h2>


<div className="logout-btn">
    <button onClick={logOut}>Log Out</button>
</div>

     <footer>
        <Footer />
     </footer>
    </div>
  )
}

export default ProfilePage
