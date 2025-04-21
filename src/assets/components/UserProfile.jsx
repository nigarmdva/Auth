import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";
import { axiosFunction } from "../axios";
const UserProfile = () => {
  const { user, token, logout, login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosFunction(
          "GET",
          "api/user",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Login responseUser", response);
        if (response) {
          login(response, token); 
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogOut}>Logout</button>
          <a href="/">Home</a>
        </div>
      )
      : (
        <div>
          <h2>User Profile</h2>
          <p>Loading user profile...</p>
        </div>
      )}   
    </div>
  );
};

export default UserProfile;
