// import { useState } from "react";
// // import ReactQuill from "react-quill";
// import { Navigate } from "react-router-dom";
// import Editor from "./Editor";
// import "react-quill/dist/quill.snow.css";
// import toast from 'react-hot-toast';

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setFiles] = useState("");
//   const [redirect, setRedirect] = useState(false);
  

//   async function createNewPost(ev) {
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);
//     data.set("file", files[0]);
//     ev.preventDefault();
//     const response = await fetch("http://localhost:8000/post", {
//       method: "POST",
//       body: data,
//       credentials: "include",
//     });
  
//     if (response.status===200) {
//     setRedirect(true);
//     toast.success(("Created Succesfully!"));
//      }
//   }

//   if (redirect) {
  
//     return <Navigate to={'/'} />
//   }
  
//   return (
//     <form onSubmit={createNewPost}>
//       <input
//         type="title"
//         placeholder={"Title"}
//         value={title}
//         onChange={(ev) => setTitle(ev.target.value)}
//       />
//       <input
//         type="summary"
//         placeholder={"Summary"}
//         value={summary}
//         onChange={(ev) => setSummary(ev.target.value)}
//       />
//       <input type="file" onChange={(ev) => setFiles(ev.target.files)} />
//       <Editor value={content} onChange={setContent}/>
     
//       <button style={{ marginTop: "5px" }}  >Create Post</button>
     
//     </form>
//   );
// }

// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import Editor from "./Editor";
// import "react-quill/dist/quill.snow.css";
// import toast from 'react-hot-toast';

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setFiles] = useState(null); // Changed to null initially
//   const [redirect, setRedirect] = useState(false);

//   async function createNewPost(ev) {
//     ev.preventDefault();
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);

//     // Add file only if it's selected
//     if (files) {
//       data.append("file", files);
//     }

//     const response = await fetch("https://blogapp-backend-ifdq.onrender.com/post", {
//       method: "POST",
//       body: data,
//       credentials: "include",
//     });

//     if (response.status === 200) {
//       setRedirect(true);
//       toast.success("Created Successfully!");
//     } else {
//       toast.error("Failed to create post. Please try again.");
//     }
//   }

//   if (redirect) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <form onSubmit={createNewPost}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(ev) => setTitle(ev.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Summary"
//         value={summary}
//         onChange={(ev) => setSummary(ev.target.value)}
//       />
//       <input
//         type="file"
//         onChange={(ev) => setFiles(ev.target.files ? ev.target.files[0] : null)}
//       />
//       <Editor value={content} onChange={setContent} />
//       <button style={{ marginTop: "5px" }}>Create Post</button>
//     </form>
//   );
// }
// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import Editor from "./Editor";
// import "react-quill/dist/quill.snow.css";
// import toast from 'react-hot-toast';

// export default function CreatePost() {
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setFiles] = useState(null);
//   const [redirect, setRedirect] = useState(false);

//   // async function createNewPost(ev) {
//   //   ev.preventDefault();
//   //   const data = new FormData();
//   //   data.set("title", title);
//   //   data.set("summary", summary);
//   //   data.set("content", content);

//   //   if (files) {
//   //     data.append("file", files);
//   //   }

//   //   try {
//   //     const response = await fetch("https://blogapp-backend-ifdq.onrender.com/post", {
//   //       method: "POST",
//   //       body: data,
//   //       credentials: "include",
//   //     });

//   //     if (response.ok) {
//   //       setRedirect(true);
//   //       toast.success("Created Successfully!");
//   //     } else {
//   //       const errorText = await response.text();
//   //       toast.error(`Failed to create post: ${errorText || "Please try again."}`);
//   //     }
//   //   } catch (error) {
//   //     toast.error(`An error occurred: ${error.message}`);
//   //   }
//   // }

//   // if (redirect) {
//   //   return <Navigate to="/" />;
//   // }
//   async function createNewPost(ev) {
//     ev.preventDefault();
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);
    
//     if (files) {
//       data.append("file", files);
//     }
  
//     try {
//       const response = await fetch("https://blogapp-backend-ifdq.onrender.com/post", {
//         method: "POST",
//         body: data,
//         credentials: "include", // This ensures cookies are sent with the request
//       });
  
//       if (response.status === 200) {
//         setRedirect(true);
//         toast.success("Created Successfully!");
//       } else if (response.status === 401) {
//         toast.error("Unauthorized. Please log in first.");
//       } else {
//         toast.error("Failed to create post. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error during the create post request:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   }
  
//     if (redirect) {
//     return <Navigate to="/" />;
//   }
//   return (
//     <form onSubmit={createNewPost}>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(ev) => setTitle(ev.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Summary"
//         value={summary}
//         onChange={(ev) => setSummary(ev.target.value)}
//       />
//       <input
//         type="file"
//         onChange={(ev) => setFiles(ev.target.files ? ev.target.files[0] : null)}
//       />
//       <Editor value={content} onChange={setContent} />
//       <button style={{ marginTop: "5px" }}>Create Post</button>
//     </form>
//   );
// }
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";
import "react-quill/dist/quill.snow.css";
import toast from 'react-hot-toast';

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    
    if (files) {
      data.append("file", files);
    }
  
    try {
      const response = await fetch("https://blogapp-backend-ifdq.onrender.com/post", {
        method: "POST",
        body: data,
        credentials: "include", // This ensures cookies are sent with the request
      });
  
      if (response.status === 200) {
        setRedirect(true);
        toast.success("Created Successfully!");
      } else if (response.status === 401) {
        toast.error("Unauthorized. Please log in first.");
      } else {
        toast.error("Failed to create post. Please try again.");
      }
    } catch (error) {
      console.error("Error during the create post request:", error);
      toast.error("An error occurred. Please try again.");
    }
  }
  
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={createNewPost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input
        type="file"
        onChange={(ev) => setFiles(ev.target.files ? ev.target.files[0] : null)}
      />
      <Editor value={content} onChange={setContent} />
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
}
