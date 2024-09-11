import { Admin } from "./pages/Admin";
import { Basket } from "./pages/Basket";
import { Shop } from "./pages/Shop";
import { DevicePage } from "./pages/DevicePage";
import { Auth } from "./pages/Auth";
import { Register } from "./pages/Register";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
    role: 'ADMIN', // Добавляем требуемую роль для этого маршрута
    name: "Панель администратора", // Добавляем имя для отображения в навигации
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
    role: 'USER',
    name: "Корзина", // Имя для маршрута корзины
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
    name: "Каталог", // Имя для магазина
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
    name: "Авторизация", // Имя для страницы входа
  },
  {
    path: REGISTER_ROUTE,
    Component: Register,
    name: "Регистрация", // Имя для страницы регистрации
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
    name: "О продукте", // Имя для страницы устройства (можно изменить при необходимости)
  },
];
