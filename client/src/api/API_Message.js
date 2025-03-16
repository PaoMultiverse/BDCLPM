import axios from "axios";

export const getMessages = async (userId, otherUserId) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/message`, {
      params: {
        userId: userId,
        otherUserId: otherUserId,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
