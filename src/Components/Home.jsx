import React from 'react'
import Footer from './Footer'
import "./Style/home.css"
import Login from './Login'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
   <div className="home">
    <div className="home-page-header">
        This is Home Page
    </div>
    <div>
      <Link to={"/login"}>Login</Link>
    </div>
    <footer>
        <Footer />
        </footer>
   </div>
    </>
  )
}

export default Home
