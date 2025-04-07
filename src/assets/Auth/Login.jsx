import React, { useState } from 'react';
import { axiosFunction } from '../axios';
import useAuth from '../store/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit =async (e) => {
        e.preventDefault();
        const userData={email, password};
        try {
            const request= await axiosFunction("GET", "sanctum/csrf-cookie", {});
            const response = await axiosFunction("POST", "api/login", userData);
            console.log("Invalid response structure:", response);
            
            if(response && response.token){
                localStorage.setItem("token", response.token);
                const userResponse = await axiosFunction("GET", "api/user", {}, {
                    Authorization: `Bearer ${response.token}`
                });   

                if(response && response.user){
                    localStorage.setItem("user", JSON.stringify(response.user));
                    useAuth.getState().setUser(response.user);
                    console.log("Updated user:", response.user)
                }
                else {
                    console.error("User data not found:", userResponse);
                }
                
                window.location.href = "/user";
                
            }
            else{
                console.error("Invalid response structure:", response);

            }
        } catch (error) {
            console.log(error);
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