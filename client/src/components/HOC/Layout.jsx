import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { authRoutes, publicRoutes } from "../../routes";
import { logout } from "../../store/userStore/UserSlice";

export const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, userRole, user } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(userRole);
  }, [userRole]);

  const buttonLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/shop");
  };

  // Определяем функцию для объединения классов
  const getClassName = () => {
    return "text-gray hover:text-gray-500 mx-5";
  };

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-8"
                />
              </div>
              <div>
                <div className="ml-10 flex items-baseline space-x-4">
                  {isAuth && (
                    <>
                      {authRoutes
                        .filter(
                          (route) => !route.role || route.role === user.role
                        )
                        .map(({ path, name }) => (
                          <Link
                            key={path}
                            to={path}
                            className="mr-4 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
                          >
                            {name}
                          </Link>
                        ))}
                    </>
                  )}

                  {publicRoutes
                    .filter((route) => route.name == "Каталог")
                    .map(({ path, name }) => (
                      <Link
                        key={path}
                        to={path}
                        className="mr-4 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
                      >
                        {name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {isAuth ? (
                  // Если пользователь авторизован, показываем его имя и кнопку "Выйти"
                  <>
                    <p className="text-sm font-semibold text-gray-900 mr-4">
                      {user.name}
                    </p>
                    <button
                      type="submit"
                      onClick={buttonLogout}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Выйти
                    </button>
                  </>
                ) : (
                  // Если пользователь не авторизован, показываем кнопки "Войти" и "Регистрация"
                  <>
                    <Link
                      to="/login"
                      className="mr-4 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
                    >
                      Войти
                    </Link>
                    <Link
                      to="/register"
                      className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Регистрация
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};
