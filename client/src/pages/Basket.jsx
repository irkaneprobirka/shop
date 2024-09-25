import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { deleteDevice, getBasket } from "../api/basketApi";
import { useNavigate } from "react-router-dom";

export const Basket = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [productBasket, setProductBasket] = useState([]);
  const [allPrice, setAllPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [basketDeviceId, setBasketDeviceId] = useState([]);

  useEffect(() => {
    const getBasketDevice = async () => {
      try {
        const data = await getBasket(user.id);
        const products = data.map((el) => el.product);
        const basketIds = data.map((el) => el.el.id);
        setProductBasket(products);
        setBasketDeviceId(basketIds);

        if (Array.isArray(data)) {
          setAllPrice(
            products.reduce((total, product) => total + product.price, 0)
          );
        } else {
          setAllPrice(0);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getBasketDevice();
  }, [user.id]);

  const deleteProduct = async (id) => {
    try {
      await deleteDevice(id);
      const updatedBasket = productBasket.filter(
        (product, index) => index !== basketDeviceId.indexOf(id)
      );
      setProductBasket(updatedBasket);
      const newPrice = updatedBasket.reduce(
        (total, product) => total + product.price,
        0
      );
      setAllPrice(newPrice);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full flex-col bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {productBasket.length > 0 ? (
                productBasket.map((product, index) => (
                  <li key={index} className="flex py-6">
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
                          <div>
                            <h3 className="mb-3">{product.name}</h3>
                            <button
                              type="button"
                              onClick={() =>
                                deleteProduct(basketDeviceId[index])
                              }
                              className="flex w-36 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                              Удалить продукт
                            </button>
                          </div>
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
              onClick={() => navigate("/shop")}
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
