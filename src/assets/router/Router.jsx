import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import UserProfile from "../components/UserProfile";
export const Router = createBrowserRouter([
   
    {
      path:"/register",
      element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/user",
        element:<UserProfile/>
    }
    
  ]);