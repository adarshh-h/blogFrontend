// import { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import Post from "./Post";
// import { UserContext } from "./UserContext.js";
// import DarkBtn from "./DarkBtn.js";
// import React from 'react';
// import toast from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';

// export default function Header() {

//  const {setUserInfo,userInfo}=useContext(UserContext);
//   useEffect(() => {

//     fetch("http://localhost:8000/profile", {
//       credentials: 'include',
//     }).then(response => {
//       response.json().then(userInfo => {
//        setUserInfo(userInfo);
//       });
//     });
//   }, []);
//  function logout(){
//     fetch('http://localhost:8000/logout',{
//         credentials: 'include',
//         method:"POST",

//     });
//     setUserInfo(null);
//     toast.success(("logged out!"));
//  }

//  const username=userInfo?.username;


//   return (
//     <header>
      
//       <Link to="/" className="logo">My Blog </Link>
//       <nav>
//         {username && (
//           <>
//             <Link to="/create">Create new Post</Link>
//             <a onClick={logout}>Logout</a>
//           </>
//         )}
//         {!username && (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//           </>
//         )}
//         <DarkBtn/>
//       </nav>
//     </header>
//   );
// }

import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.js";
import DarkBtn from "./DarkBtn.js";
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("https://blogapp-backend-ifdq.onrender.com/profile", {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, [setUserInfo]); // Add setUserInfo to dependency array

  function logout() {
    fetch('https://blogapp-backend-ifdq.onrender.com/logout', {
      credentials: 'include',
      method: "POST",
    }).then(() => {
      setUserInfo(null);
      toast.success("Logged out!");
    });
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">My Blog</Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create new Post</Link>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <DarkBtn />
      </nav>
    </header>
  );
}
