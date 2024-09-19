import axios from "axios";

export const createType = async (name, token) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/type",
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Ошибка создания типа:", error);
    throw error;
  }
};

export const createBrand = async (name, token) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/brand",
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const createDevice = async ({ name, typeId, brandId, price, img, token }) => {
  try {
    // Создаем FormData для передачи файлов
    const formData = new FormData();
    formData.append("name", name);
    formData.append("typeId", typeId);
    formData.append("brandId", brandId);
    formData.append("price", price);
    formData.append("img", img); // Добавляем файл

    const res = await axios.post("http://localhost:5000/api/device", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Указываем заголовок для работы с файлами
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
