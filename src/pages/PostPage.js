// import { formatISO9075 } from "date-fns";
// import { useContext, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { UserContext } from "../UserContext";
// export default function PostPage() {
//   const { id } = useParams();
//   const [postInfo, setPostInfo] = useState(null);
//   const { userInfo } = useContext(UserContext);
//   useEffect(() => {
//     fetch(`http://localhost:8000/post/${id}`).then((response) => {
//       response.json().then((postInfo) => {
//         setPostInfo(postInfo);
//       });
//     });
//   },[]);
//   if (!postInfo) return "";
  
//   return (
//     <div className="post-page">
//       <h1>{postInfo.title}</h1>
//       <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
//       <div className="author">by @{postInfo.author.username}</div>
//       {userInfo.id === postInfo.author._id && (
//         <div className="edit-row">
//           <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//               />
//             </svg>
//             Edit this Post
//           </Link>
//         </div>
//       )}
//       <div className="image">
//         <img src={`http://localhost:8000/${postInfo.cover}`} alt="" />
//       </div>

//       <div
//         className="content"
//         dangerouslySetInnerHTML={{ __html: postInfo.content }}
//       />
//     </div>
//   );
// }

import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function PostPage() {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://blogapp-backend-ifdq.onrender.com/post/${id}`)
      .then((response) => response.json())
      .then((postInfo) => {
        setPostInfo(postInfo);
      });
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const response = await fetch(`https://blogapp-backend-ifdq.onrender.com/post/${id}`, {
          method: "DELETE",
          credentials: "include", // Include cookies for authentication
        });

        if (response.ok) {
          alert("Post deleted successfully.");
          navigate("/"); // Redirect to the home page or another appropriate page
        } else {
          alert("Failed to delete the post.");
        }
      } catch (error) {
        console.error("Error deleting the post:", error);
        alert("An error occurred while deleting the post.");
      }
    }
  };

  if (!postInfo) return "";

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Edit this Post
          </Link>
          <button className="delete-btn" onClick={handleDelete}>
            Delete this Post
          </button>
        </div>
      )}
      <div className="image">
        <img src={`https://blogapp-backend-ifdq.onrender.com/${postInfo.cover}`} alt="" />
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
}
