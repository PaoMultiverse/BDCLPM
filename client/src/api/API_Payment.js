import axios from "axios";

export const createPaymentUrl = async (orderId) => {
  try {
    const res = await axios.get(
      `https://bdclpm-server.vercel.app/create_payment_url?orderId=${orderId}`
    );
    return res.data;
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data; // Trả về lỗi từ server nếu có
    }
  }
};

export const vnpayReturn = async (vnpParams) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/vnpay_return${vnpParams}`
    );
    return res.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.log(error);
      return error.response.data; // Trả về lỗi từ server nếu có
    }
  }
};
