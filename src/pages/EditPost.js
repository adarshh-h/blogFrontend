// import { useEffect, useState } from "react";
// import { Navigate, useParams } from "react-router-dom";
// import Editor from "./Editor";
// import toast from 'react-hot-toast';

// export default function EditPost() {
//   const {id} = useParams();
//   const [title, setTitle] = useState("");
//   const [summary, setSummary] = useState("");
//   const [content, setContent] = useState("");
//   const [files, setFiles] = useState("");
//   const [redirect, setRedirect] = useState(false);
  
//   useEffect(() => {
//     fetch('http://localhost:8000/post/'+id)
//      .then(response =>{
//         response.json().then(postInfo => {
//             setTitle(postInfo.title);
//             setContent(postInfo.content);
//             setSummary(postInfo.summary);
//         });
//      });
//   },[]);

// async function updatePost(ev){
//     ev.preventDefault();
//     const data = new FormData();
//     data.set("title", title);
//     data.set("summary", summary);
//     data.set("content", content);
//     data.set("id",id);
//     if(files?.[0]){
//         data.set("file", files?.[0]);
//     }

//     const response = await fetch('https://blogapp-backend-ifdq.onrender.com/post',{
//         method:'PUT',
//         body:data,
//         credentials:'include',
//     });

//     if(response.ok){
//         setRedirect(true);
//         toast.success(("Update Succesfully!"));
//     }
// }
//   if (redirect) {
//     return <Navigate to={'/post/'+id} />
//   }

//   return (
//     <form onSubmit={updatePost}>
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
   
//       <input 
//         type="file" 
//         onChange={(ev) => setFiles(ev.target.files)} 
//       />
//      <Editor onChange={setContent} value={content}/>
//       <button style={{ marginTop: "5px" }}>Update Post</button>
//     </form>
//   );
// }
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "./Editor";
import toast from 'react-hot-toast';

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`https://blogapp-backend-ifdq.onrender.com/post/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(postInfo => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      })
      .catch(error => {
        console.error('Failed to fetch post:', error);
        toast.error("Failed to load post information.");
      });
  }, [id]);

  async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files) {
      data.append("file", files);
    }

    try {
      const response = await fetch('https://blogapp-backend-ifdq.onrender.com/post', {
        method: 'PUT',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        setRedirect(true);
        toast.success("Updated Successfully!");
      } else {
        const errorMessage = await response.text();
        toast.error(`Failed to update post: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Failed to update post:', error);
      toast.error("An error occurred while updating the post.");
    }
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  return (
    <form onSubmit={updatePost}>
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
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Update Post</button>
    </form>
  );
}
