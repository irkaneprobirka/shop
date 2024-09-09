import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export const AppRouter = () => {
  const { isAuth, userRole } = useSelector((state) => state.user);

  return (
    <Routes>
      {/* Защищенные маршруты */}
      {authRoutes.map(({ path, Component, role }) => (
        <Route
          key={path}
          path={path}
          element={
            isAuth ? (
              role && userRole !== role ? (
                // Перенаправляем на страницу доступа запрещена, если у пользователя нет нужной роли
                <Navigate to="/403" />
              ) : (
                // Если авторизован и роль соответствует, рендерим компонент
                <Component />
              )
            ) : (
              // Перенаправляем на страницу входа, если пользователь не авторизован
              <Navigate to={LOGIN_ROUTE} />
            )
          }
        />
      ))}

      {/* Открытые маршруты */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      {/* Перенаправление на главную страницу для несуществующих маршрутов */}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};
