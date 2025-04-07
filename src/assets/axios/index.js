import axios from "axios";
const baseURL = "https://expense-tracker-api-u87b.onrender.com";

export const axiosFunction = async (method, endpoint, data) => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}/${endpoint}`,
      data: data && data,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log(response.data);

    return response.data; 
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
};