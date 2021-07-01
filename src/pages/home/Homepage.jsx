import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import Header from '../../Component/header/Header'
import Sidebar from '../../Component/sidebar/Sidebar'
import Posts from '../../Component/posts/Posts'
import axios from 'axios'
const Home = () => {
    const [posts, setPosts]= useState([]);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("/posts")
            console.log(res);
        }
        fetchPosts()
    },[])

    return (
        <>
         <Header />
        <div className="home">
           <Posts />
           <Sidebar />
        </div>
        </>
    )
}

export default Home
