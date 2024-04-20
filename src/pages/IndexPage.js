import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
const [posts,setPosts]=useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/post').then(response=>{
        response.json().then(posts=>{
            setPosts(posts);
        });

    })
  }, []);
// https://blogapp-1-3glq.onrender.com

  return (
    <>
    {posts.length > 0 && posts.map(post =>(
        <Post {...post}/>
    ))}
    </>
  );
}
