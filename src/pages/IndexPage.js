// import { useEffect, useState } from "react";
// import Post from "../Post";

// export default function IndexPage() {
// const [posts,setPosts]=useState([]);
//   useEffect(() => {
//     fetch('http://localhost:8000/post').then(response=>{
//         response.json().then(posts=>{
//             setPosts(posts);
//         });

//     })
//   }, []);


//   return (
//     <>
//     {posts.length > 0 && posts.map(post =>(
//         <Post {...post}/>
//     ))}
//     </>
//   );
// }



import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8000/post');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // Fetch posts when the component mounts

  return (
    <div>
      {loading && <p>Loading posts...</p>}
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post._id} {...post} />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}
