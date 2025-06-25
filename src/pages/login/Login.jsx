import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy check
    if (username === 'user' && password === 'pass') {
      alert('Login successful!');
      navigate('/dashboard'); // change as needed
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input 
            type="text" 
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />

          <label>Password</label>
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button type="submit">Log in</button>
        </form>

        <div className="login-links">
          <a href="#">Forgot password?</a>
          <a href="/signup">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
