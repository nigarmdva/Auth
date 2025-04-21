import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosFunction } from '../axios';
import useAuthStore from '../store/auth';
const Login = () => {
    const navigate= useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuthStore();

    const handleSubmit =async (e) => {
        e.preventDefault(); 
        const userData={email, password};
        try {
            await axiosFunction("GET", "sanctum/csrf-cookie", {});
            const response = await axiosFunction("POST", "api/login", userData);
            console.log( "Login response",response);
            login(response.user, response.token);
            navigate("/user");
        } catch (error) {
            console.log(error.response?.data);
        }
        
    }

  return (
    <form  onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
            <input type="text" name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>Login</button>
        </div>
    </form>
  )
}

export default Login