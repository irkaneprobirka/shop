import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userStore/UserApi';

export const Auth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form)); // Диспатчим асинхронное действие
  };

  useEffect(() => {
    console.log(user)
  }, [user])
  

  return (
    <div>
      <h2>Авторизация</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
