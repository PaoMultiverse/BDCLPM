import axios from "axios";

export const getShippingAddress = async (accessToken) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/address/`, {
      headers: { token: `Bearer ${accessToken}` },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addShippingAddress = async (accessToken) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/customer/address/add`,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCustomers = async (accessToken, axiosJWT) => {
  try {
    const res = await axiosJWT.get(
      `${process.env.REACT_APP_API_URL}/customer/`,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProfileUser = async (accessToken, axiosJWT) => {
  try {
    const res = await axiosJWT.get(
      `${process.env.REACT_APP_API_URL}/customer/profile`,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addAddress = async (accessToken, axiosJWT, data) => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/customer/address/add`,
      data,
      {
        headers: { token: `Bearer ${accessToken}` },
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateAddressDefault = async (addressId) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/customer/update-adress/` + addressId
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
