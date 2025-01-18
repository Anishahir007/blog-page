import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
 
import TimeAgo from 'javascript-time-ago'
import ReactTimeAgo from 'react-time-ago'
 
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const PostAuth = ({authorID , createdAt}) => {

  const [author , setAuthor] = useState({});
 
  useEffect(()=>{
    const getAuthor = async () =>{
    try {
     
        const response = await axios.get(`https://blog-page-backend.onrender.com/api/users/${authorID}`);
        setAuthor(response?.data);
 
     
    } catch (error) {
      console.log(error);
     
    }
  }
    getAuthor();
  },[])

  return (
    <>
      <Link to={`/posts/users/${authorID}`} className="post_author">
        <div className="post_author-avatar">
          <img src={`https://blog-page-backend.onrender.com/uploads/${author?.avatar}`} alt="" />
        </div>
        <div className="post_author-details">
        <h5>By: {author?.name}</h5>
        <small><ReactTimeAgo date={new Date(createdAt)} locale="en-US"/></small>
        </div>
      </Link>
    </>
  );
};

export default PostAuth;
