import axios from "axios";
import {
  addProdToCartSuccess,
  createProductSuccess,
  deleteProductSuccess,
  getproductDetailSuccess,
  getProductsSuccess,
} from "../redux/slice/product";
import { getProductByCategorySuccess } from "../redux/slice/category";

export const createProduct = async (dispacth, data) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/prod/create`, data);
    dispacth(createProductSuccess());
    return { success: true }; // Thêm dòng này để trả về kết quả thành công
  } catch (error) {
    console.log(error);
    return { success: false, error: error.message }; // Trả về thông tin lỗi nếu có
  }
};

export const getProducts = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/prod/get`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductByCategory = async (dispacth, categoryId) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/prod/${categoryId}`
    );
    dispacth(getProductByCategorySuccess(res.data));
  } catch (error) {}
};

export const deleteProduct = async (dispacth, productId) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/prod/${productId}`
    );
    dispacth(deleteProductSuccess(res.data));
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = async (dispacth, productId) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/remove/${productId}`
    );
    dispacth(deleteProductSuccess(res.data));
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetail = async (dispacth, productId) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/prod-detail/${productId}`
    );
    dispacth(getproductDetailSuccess(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addProdToCart = async (accessToken, data, axiosJWT) => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/shopping/add`,
      data,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    return res.data;
  } catch (error) {
    return { success: false };
  }
};

export const getTags = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tag/`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const getVariants = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/variant`);

    return res.data;
  } catch (error) {
    return error;
  }
};
