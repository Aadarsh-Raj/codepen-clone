import React from 'react'
import Footer from './Footer'
import "./Style/home.css"
import Login from './Login'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const Home = () => {
  return (
    <>
   <div className="home">
    <div className="home-page-header">
        <SearchBar />
    </div>
    <div>
      Please Login to Check data

    </div>
    <footer>
        <Footer />
        </footer>
   </div>
    </>
  )
}

export default Home
