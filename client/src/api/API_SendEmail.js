import axios from "axios";

export const sendInfoOrder = async (email, orderId) => {
  try {
    const res = await axios.post(
      `https://bdclpm-server.vercel.app/send/info-order`,
      { email: email, order_id: orderId }
    );
    return res.data;
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const resetPassword = async (email) => {
  try {
    const res = await axios.post(
      `https://bdclpm-server.vercel.app/send/reset-pass`,
      { email: email }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const returnPassword = async (token) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/send/return-newpass?token=${token}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
