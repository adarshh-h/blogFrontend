// import { useState } from "react";
// import toast from 'react-hot-toast';
// export default function RegisterPage() {

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   async function register(ev) {
//     ev.preventDefault();
//     const response = await fetch('http://localhost:8000/register',{
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//     if(response.status===200){
//       // alert('registration succesfull');
//       toast.success(("registration succesfully!"));
//     } else{
//       // alert('registration failed');
//       toast.error("Wrong credentials!")
//     }
//   }

//   return (
//     <form className="register" onSubmit={register}>
//       <h1>Register</h1>
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
      
//       <button>Register</button>
//     </form>
//   );
// }


import { useState } from "react";
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  // Function to validate password strength
  function validatePasswordStrength(password) {
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      setPasswordStrength("Strong");
    } else if (password.length >= 6) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Weak");
    }
  }

  async function register(ev) {
    ev.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const response = await fetch('http://localhost:8000/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      toast.success("Registration successful!");
    } else {
      toast.error("Registration failed. Please try again.");
    }
  }

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        required
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(ev) => {
          setPassword(ev.target.value);
          validatePasswordStrength(ev.target.value);
        }}
        required
      />
      
      <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
        Password Strength: {passwordStrength}
      </div>

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(ev) => setConfirmPassword(ev.target.value)}
        required
      />

      <button>Register</button>
    </form>
  );
}
