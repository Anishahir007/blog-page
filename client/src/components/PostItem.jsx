import React from 'react'
import PostAuth from './PostAuth'
import { Link } from 'react-router-dom';


const PostItem = ({
 postID, category, title, description, authorID, post , thumbnail , createdAt
}) => {
  const shortDescription = description > 145 ? description.substr(0 ,145) + "...":
  description;

  const shortTitle = title.length > 30 ? title.substr(0 , 30) + "..." : title;
  return (
    <>
  <div>
    <article className='post'>
   <div className='post-thumbnail'>
    <img src={`https://blog-page-backend.onrender.com/uploads/${thumbnail}`} alt={title} />
    </div>
    <div className="post-content">

      <Link to={`/posts/${postID}`} >
      <h3>{shortTitle}</h3>
      </Link>
      <p dangerouslySetInnerHTML={{__html: shortDescription}} />
      <div className="post-footer">
      <PostAuth authorID={authorID} createdAt={createdAt} />
        <Link to={`/posts/categories/${category}`} className="btn category">
        {category}
        </Link>
      </div>
    </div>
    </article>
   </div> 
    
     </>
  )
}

export default PostItem
