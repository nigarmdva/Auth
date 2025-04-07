import axios from "axios";
const baseURL = "https://expense-tracker-api-u87b.onrender.com/api";

export const axiosFunction = async (method, endpoint, data) => {
  try {
    const response = await axios({
      method,
      url: `${baseURL}/${endpoint}`,
      data: data && data,
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