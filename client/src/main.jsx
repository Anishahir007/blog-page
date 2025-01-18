import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Auther from './pages/Author.jsx'
import AuthorPosts from './pages/AuthorPosts.jsx'
import CategoryPost from './pages/CategoryPost.jsx'
import CreatePost from './pages/CreatePost.jsx'
import Dashboard from './pages/Dashboard.jsx'
import DeletePost from './pages/DeletePost.jsx'
import Editpost from './pages/Editpost.jsx'
import Errorpage from './pages/Errorpage.jsx'
import Login from './pages/Login.jsx'
import Logout from './pages/Logout.jsx'
import PostDetail from './pages/PostDetail.jsx'
import Register from './pages/Register.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Layout from './components/Layout.jsx'
import Post from './components/Post.jsx'
import PostAuth from './components/PostAuth.jsx'
import PostItem from './components/PostItem.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Author from './pages/Author.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


import UserProvider from './context/UseContext.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
   
   <Route path='/' element={<Home />}>

   <Route path='*'  element={<PageNotFound/>} />
  <Route path=''  element={<Post/>} />
  <Route path='create'  element={<CreatePost/>} />
  <Route path='authers'  element={<Auther/>} />
  <Route path='logout'  element={<Logout/>}/>
  <Route path='login'  element={<Login/>}/>
  <Route path='author'  element={<Author/>}/>

  <Route path='profile/:id'  element={<UserProfile/>}/>
  <Route path='register'  element={<Register/>}/>
  <Route path='posts/:id'  element={<PostDetail/>}/>
  <Route path='posts/categories/:category'  element={<CategoryPost/>}/>
  <Route path='posts/users/:id'  element={<AuthorPosts />}/>
  <Route path='posts/users/:id'  element={<AuthorPosts />}/>
  <Route path='myposts/:id'  element={<Dashboard />}/>
  <Route path='/posts/:id/edit'  element={<Editpost />}/>
    
   </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <UserProvider>
   <RouterProvider router={router} />
   </UserProvider>
)


