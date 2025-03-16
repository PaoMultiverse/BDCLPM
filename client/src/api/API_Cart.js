import axios from "axios";
import { getCartSucsess } from "../redux/slice/cart";

export const getCart = async (accessToken, dispatch, axiosJWT) => {
  try {
    const res = await axiosJWT.get(
      `https://bdclpm-server.vercel.app/shopping/`,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );

    dispatch(getCartSucsess(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeCartItem = async (accessToken, itemId, axiosJWT) => {
  try {
    const res = await axiosJWT.delete(
      `https://bdclpm-server.vercel.app/shopping/${itemId}`,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    return res.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data; // Trả về lỗi từ server nếu có
    }
  }
};
