// import { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { UserContext } from "../UserContext.js";
// import React from 'react';
// import toast from 'react-hot-toast';

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const {setUserInfo}=useContext(UserContext);

//   async function login(ev) {
//     ev.preventDefault();
//     const response = await fetch("https://blogapp-backend-ifdq.onrender.com/login", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//     });

//     if (response.status === 200) {
//       response.json().then(userInfo=>{
//         setUserInfo(userInfo);
//         setRedirect(true);
//       })
//       toast.success(("logged in!"));
//     } else {
//       // alert("wrong credentials");
//       toast.error("Wrong credentials!")
//     }
//   }
//   if (redirect) {

//      return <>
//      <Navigate to={"/"} />;
//      </>
  
//   }
//   return (
//     <form action="" className="login" onSubmit={login}  >
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="username"
//         value={username}
//         onChange={(ev) => setUsername(ev.target.value)}
//       />

//       <input
//         type="password"
//         placeholder="password"
//         value={password}
//         onChange={(ev) => setPassword(ev.target.value)}
//       />
    
//       {/* <button onClick={notify} >login</button> */}
//         <button>Login</button>
//     </form>
//   );
// }
// import { useContext, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { UserContext } from "../UserContext.js";
// import React from 'react';
// import toast from 'react-hot-toast';

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const { setUserInfo } = useContext(UserContext);

//   // async function login(ev) {
//   //   ev.preventDefault();

//   //   try {
//   //     const response = await fetch("https://blogapp-backend-ifdq.onrender.com/login", {
//   //       method: "POST",
//   //       body: JSON.stringify({ username, password }),
//   //       headers: {
//   //         "Content-Type": "application/json"
//   //       },
//   //       credentials: "include", // Ensure CORS configuration allows credentials
//   //     });

//   //     if (response.ok) {
//   //       const userInfo = await response.json();
//   //       setUserInfo(userInfo);
//   //       setRedirect(true);
//   //       toast.success("Logged in successfully!");
//   //     } else {
//   //       // Handle non-200 responses
//   //       toast.error("Wrong credentials!");
//   //     }
//   //   } catch (error) {
//   //     // Handle network errors or other issues
//   //     console.error("Login failed:", error);
//   //     toast.error("An error occurred. Please try again.");
//   //   }
//   // }

//   // if (redirect) {
//   //   return <Navigate to="/" />;
//   // }
//   async function login(ev) {
//     ev.preventDefault();
//     try {
//       const response = await fetch("https://blogapp-backend-ifdq.onrender.com/login", {
//         method: "POST",
//         body: JSON.stringify({ username, password }),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "include", // Ensure CORS configuration allows credentials
//       });
  
//       if (response.ok) {
//         const userInfo = await response.json();
//         setUserInfo(userInfo);
//         setRedirect(true);
//         toast.success("Logged in successfully!");
//       } else {
//         toast.error("Wrong credentials!");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   }
  
//   if (redirect) {
//     return <Navigate to="/" />;
//   }
  
//   return (
//     <form className="login" onSubmit={login}>
//       <h1>Login</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(ev) => setUsername(ev.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(ev) => setPassword(ev.target.value)}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext.js";
import React from 'react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    try {
      const response = await fetch("https://blogapp-backend-ifdq.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", // Ensure CORS configuration allows credentials
      });
  
      if (response.ok) {
        const userInfo = await response.json();
        setUserInfo(userInfo);
        setRedirect(true);
        toast.success("Logged in successfully!");
      } else {
        toast.error("Wrong credentials!");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("An error occurred. Please try again.");
    }
  }
  
  if (redirect) {
    return <Navigate to="/" />;
  }
  
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
