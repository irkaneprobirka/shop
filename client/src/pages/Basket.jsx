import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBasket } from "../api/basketApi";

export const Basket = () => {
  const { user } = useSelector((state) => state.user);
  
  const [productBasket, setProductBasket] = useState([]);
  const [allPrice, setAllPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBasketDevice = async () => {
      if (!user || !user.id) {
        console.error("User or basketId is missing");
        return;
      }

      try {
        const data = await getBasket(user.id); 
        setProductBasket(data);
        setAllPrice(data.reduce((total, product) => total + product.price, 0)); 
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false); 
      }
    };

    getBasketDevice();
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full flex-col  bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {productBasket.length > 0 ? (
                productBasket.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        alt={product.name}
                        src={`http://localhost:5000/static/${product.img}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.name}</h3>
                          <p className="ml-4">{product.price} р.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <p>Корзина пуста</p>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Сумма заказа</p>
          <p>{allPrice} р.</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Доставка и налоги рассчитываются при оформлении заказа.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Оформить заказ
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            или{" "}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Продолжить покупки <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
