import axios from "axios";

export const getAllProducts = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/device/");
    return res.data;
  } catch (e) {
    console.error("Error fetching products:", e);
    return [];
  }
};

export const getOneProduct = async (id) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/device/${id}`);
    return res.data;
  } catch (e) {
    console.error("Error fetching products:", e);
    return []; 
  }
};

export const getOneType = async (id) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/type/${id}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const getOneBrand = async (id) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/brand/${id}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};