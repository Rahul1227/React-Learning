import React, { useState, useContext } from "react";
import useUser from "../context/NewUserContext";

function Login({ onLogin }) {
  const {setUser}=useUser();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    // Simulate login logic
    setUser({ username, password });
    onLogin(); // Notify the parent component that the user has logged in
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5">Login</h1>
    
      <form className="flex flex-col justify-center bg-slate-800 border-1 shadow-lg shadow-white p-10 rounded">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default Login;
