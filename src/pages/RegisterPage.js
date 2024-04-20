import { useState } from "react";
import toast from 'react-hot-toast';
export default function RegisterPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:8000/register',{
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if(response.status===200){
      // alert('registration succesfull');
      toast.success(("registration succesfully!"));
    } else{
      // alert('registration failed');
      toast.error("Wrong credentials!")
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
      />
      
      <button>Register</button>
    </form>
  );
}