import axios from "axios";

export const getBasket = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/basket/${id}`); 
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  

export const addDevice = async (basketId, deviceId) => {
  try {
    const res = await axios.post("http://localhost:5000/api/basket", {
      basketId,
      deviceId,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
