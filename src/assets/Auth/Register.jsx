import React, { useState } from 'react'
import { axiosFunction } from '../axios'
import useAuthStore from '../store/auth'

const Register = () => {
    const { login } = useAuthStore();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            name,
            email,
            password,
            password_confirmation: cPassword
        }

        try {
            await axiosFunction("GET", "sanctum/csrf-cookie", {});
            const response = await axiosFunction("POST", "api/register", userData)
           
            const user = response.user;
            const token = response.token;
            console.log("Updated user:", user)
            login(user,token);  
        } catch (error) {
            console.log(error.response?.data);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <h1>Register</h1>
                <input type="text" name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
                <input type="text" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <input type="password" name="cPassword" placeholder="Confirm Password" onChange={(e) => setCPassword(e.target.value)} />
                <button type="submit">Register</button>
            </div>
        </form>
    )
}

export default Register
