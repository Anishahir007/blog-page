import React, {useContext , useEffect , useState} from 'react'
import PostAuth from '../components/PostAuth';
import { Link, useParams } from 'react-router-dom'
import DeletePost from './DeletePost';
import Loader from '../components/Loder';
import { UserContext } from '../context/UseContext';
import axios from 'axios';
 
const PostDetail = () => {

  const {id} = useParams();
  const [post , setPost] = useState(null);
 
  const [error , setError] = useState(null);
  const [isLoading , setIsLoading] = useState(false);
 
  const {currentUser} = useContext(UserContext);
 
  useEffect(()=>{
    const getPost = async () =>{
      setIsLoading(true);
 
      try {
        const response =  await axios.get(`https://blog-page-backend.onrender.com/api/posts/${id}`);
 
        setPost(response.data);
     
 
      } catch (error) {
       setError(error)
      }
 
      setIsLoading(false)
    }
 
    getPost();
  },[])
 
 
 
  if(isLoading){
    return <Loader />
  }
  return (
    <>
    <section className="post-detail">
    {error && <p className="form_error-message">{error}</p>}

 {post && <div className="container post-detail_container">
 
    <div className="post-detail_header">
 
    <PostAuth  authorID={post.creator} createdAt={post.createdAt}/>
 
    {currentUser?.id == post?.creator && <div className="post-detail_buttons">
      <Link to={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
      {/* <Link to={'/posts/werwer/delete'} className='btn sm primary'>Delete</Link> */}
      <DeletePost postId={id} />
    </div>}
 
    </div>
 
    <h1>{post.title}</h1>
 
    <div className="post-detail_tumbnail">
    <img src={`https://blog-page-backend.onrender.com/uploads/${post.thumbnail}`} alt="" />
    </div>
    <p dangerouslySetInnerHTML= {{__html: post.description}}></p>
    </div>}
 
    </section>
    </>
  )
}
 
export default PostDetail
