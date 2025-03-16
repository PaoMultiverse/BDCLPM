import axios from "axios";

export const getVoucher = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/voucher/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addVoucher = async (vocherData) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/voucher/add`,
      vocherData
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
