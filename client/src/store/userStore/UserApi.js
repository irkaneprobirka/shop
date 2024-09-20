import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

// Логин пользователя
export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password }
      );
      const token = response.data.token;
      console.log(token);
      Cookies.set("token", token, { expires: 7 });
      console.log(response.data);
      return response.data; // Возвращаем данные пользователя
    } catch (e) {
      return rejectWithValue(e.response?.data || "Ошибка при логине");
    }
  }
);

// Регистрация пользователя
export const registerUser = createAsyncThunk(
  "user/register",
  async ({ email, password, name, role }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        { email, password, name, role }
      );
      const { token } = response.data.token;
      Cookies.set("token", token, { expires: 7 });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.response?.data || "Ошибка при регистрации");
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get("token"); // Получение токена из cookies
      const response = await axios.get("http://localhost:5000/api/user/auth", {
        headers: {
          Authorization: `Bearer ${token}`, // Отправка токена в заголовках
        },
      });
      return response.data; // Возвращаем данные, если запрос успешен
    } catch (error) {
      return rejectWithValue(error.response.data); // Возвращаем ошибку, если запрос неуспешен
    }
  }
);

export const getOneUser = createAsyncThunk(
  "user/getOneUser",
  async ({id, abortController}, { rejectWithValue }) => {
    console.log(id)
    try {
      const response = await axios.get(`http://localhost:5000/api/user/${id}`, {
        abortController,
      });

      return response.data; // Возвращаем данные, если запрос успешен
    } catch (error) {
      return rejectWithValue(error.response.data); // Возвращаем ошибку, если запрос неуспешен
    }
  }
);
