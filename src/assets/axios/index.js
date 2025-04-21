import axios from "axios";
import Cookies from "js-cookie";
const baseURL = "http://localhost:8000";

export const axiosFunction = async (method, endpoint, data) => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}/${endpoint}`,
      data: data && data,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN")
      }
    });

    return response.data; 
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
};