import axios from "axios";

export const getBrand = async () => {
  try {
    const res = await axios.get("https://bdclpm-server.vercel.app/brand/");
    return res.data;
  } catch (error) {}
};
