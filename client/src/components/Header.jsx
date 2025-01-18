import React, { useContext } from 'react'
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UseContext'


const Header = () => {

const {currentUser} =useContext(UserContext)

  return (
    <>
    <header className="header">
      <img src={logoImg} alt="logo" />

    {currentUser?.id &&  <nav className='navbar'>
         <li><Link to={`/profile/${currentUser.id}`}>{currentUser?.name}</Link></li>
         <li><a href={"/create"}>Create Post</a></li>
         <li><Link to="/authers">Authors</Link></li>
         <li><a href="/logout">Logout</a></li>
      </nav> }
    {!currentUser?.id &&  <nav className='navbar'>
         <li><a href="/authors">Authors</a></li>
         <li><a href="/login">Login</a></li>
      </nav> }
      
    </header>
    </>
  )
}

export default Header