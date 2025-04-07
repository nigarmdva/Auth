import React from 'react'
import useAuth from '../store/auth'

const UserProfile = () => {
    const user = useAuth((state) => state.user);
    console.log(user);

  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <span>{user?.id}</span>
        <span>{user?.token}</span>
    </div>
  )
}

export default UserProfile