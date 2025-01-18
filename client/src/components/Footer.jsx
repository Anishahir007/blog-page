import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




const Footer = () => {


const fatchAPI = async() =>{
  try {
    const response = await axios.get("https://blog-page-backend.onrender.com/api/posts")
  const data = response.data[0];
  } catch (error) {
    console.log(error)
  }
}


useEffect(() =>{
  fatchAPI()
})

  return (
    <>
    <footer className='footer'>
      <div className="footer-list">
        <li><Link to={`/posts/categories`}>Agriculture</Link></li>
        <li><a href="">Business</a></li>
        <li><a href="">Eduction</a></li>
        <li><a href="">Entertainment</a></li>
        <li><a href="">Art</a></li>
        <li><a href="">Investment</a></li>
        <li><a href="">Uncategorized</a></li>
        <li><a href="">Weather</a></li>
      </div>
      <div className="footer-bottom">
        <p>All Rights Reserved &copy; Copyright, Anish Yadav</p>
      </div>
    </footer>
    
    </>
  )
}

export default Footer
