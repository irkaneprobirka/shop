import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/userStore/UserApi";

export const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };
  useEffect(() => {
    console.log(user)
  }, [user])
  
  return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type="name"
          name="name"
          value={form.name}
          placeholder="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
