import React, { useEffect, useState } from 'react'
import PostItem from '../components/PostItem'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loder';
 
const AuthorPosts = () => {
 
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 
  const {id} = useParams();
 
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://blog-page-backend.onrender.com/api/posts/users/${id}`);
       
        // Assuming the response contains an array of posts, not just one post.
        setPosts(response?.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setIsLoading(false);
    };
 
    fetchPosts();
  }, [id]);
 
  if (isLoading) {
    return <Loader />;
  }
 
  return (
    <section className="posts">
      {posts.length > 0 ? (
        <div className="container posts_container">
          {posts.map(({ _id:id, title, thumbnail, description, creator ,category, createdAt }) => (
            <PostItem
              key={id}
              postID={id}
              title={title}
              thumbnail={thumbnail}  // Use 'thumbnail' correctly.
              description={description}
              category={category}
              authorID={creator}
              createdAt={createdAt}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts</h2>
      )}
    </section>
  );
}
 
export default AuthorPosts
