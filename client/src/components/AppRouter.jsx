import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE, ADMIN_ROUTE } from "../utils/consts";
import { useSelector } from "react-redux";
import { Admin } from "../pages/Admin";

export const AppRouter = () => {
  const { isAuth, userRole } = useSelector((state) => state.user);

  return (
    <Routes>
      {/* Защищённые маршруты для авторизованных пользователей */}
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}

      {/* Защищённые маршруты для администратора */}
      {isAuth && userRole === 'ADMIN' && (
        <Route path={ADMIN_ROUTE} element={<Admin />} />
      )}

      {/* Публичные маршруты для всех пользователей */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}

      {/* Перенаправляем на главную, если маршрут не найден */}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};
