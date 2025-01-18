import React, { useState } from "react";
import { Link } from "react-router-dom";
import {DUMMY_POST} from '../data'
 
const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POST);
 
  return (
    <>
      <section className="dashboard">
        {posts.length ? (
          <div className="container dashboard_container">
 
            {
              posts.map((post => {
                return <article key={post.id} className="dashboard_post">
                  <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                  <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                  </div>
                  <div className="dashboard_post-actions">
                    <Link to={`/posts/${post.id}`} className="btn ">
                    View</Link>
                    <Link to={`/posts/${post.id}/edit`} className="btn sm primary">
                    Edit</Link>
                    <Link to={`/posts/${post.id}/delete`} className="btn danger">
                    Delete</Link>
                  </div>
                </article>
              }))
            }
          </div>
        ) : (
          <div className="center">You have no posts yet.</div>
        )}
      </section>
    </>
  );
};
 
export default Dashboard;