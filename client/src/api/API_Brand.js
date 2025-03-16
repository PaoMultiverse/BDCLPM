import axios from "axios";

export const getBrand = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/brand/`);
    return res.data;
  } catch (error) {}
};
