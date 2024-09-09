import { Admin } from "./pages/Admin";
import { Basket } from "./pages/Basket";
import { Shop } from "./pages/Shop";
import { DevicePage } from "./pages/DevicePage";
import { Auth } from "./pages/Auth";
import { Register } from "./pages/Register";
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
        role: 'admin', // Добавляем требуемую роль для этого маршрута
    },
    {
        path: BASKET_ROUTE,
        Component: Basket,
        // Можно добавить роль, если требуется
        // role: 'user',
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTER_ROUTE,
        Component: Register,
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage,
    },
];
