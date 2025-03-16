import axios from "axios";

export const getVoucher = async () => {
  try {
    const res = await axios.get(`https://bdclpm-server.vercel.app/voucher/`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addVoucher = async (vocherData) => {
  try {
    const res = await axios.post(
      `https://bdclpm-server.vercel.app/voucher/add`,
      vocherData
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
