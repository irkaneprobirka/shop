import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneBrand, getOneProduct, getOneType } from "../api/shopApi";
import { addDevice } from "../api/basketApi";
import { useSelector } from "react-redux";

export const DevicePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [type, setType] = useState(null);
  const [brand, setBrand] = useState(null);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getOneProduct(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (product && product.typeId) {
      const getType = async () => {
        const res = await getOneType(product.typeId);
        setType(res);
      };
      getType();
    }
  }, [product]);

  useEffect(() => {
    if (product && product.brandId) {
      const getBrand = async () => {
        const res = await getOneBrand(product.brandId);
        setBrand(res);
      };
      getBrand();
    }
  }, [product]);

  const buttonSubmitProduct = async () => {
    try {
      const data = await addDevice(user.id, product.id);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return date.toLocaleDateString("ru-RU", options);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white border rounded-xl shadow-sm sm:flex">
      <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
        <img
          className="size-full absolute top-0 start-0 object-cover"
          src={`http://localhost:5000/static/${product.img}`}
          alt={product.name}
        />
      </div>
      <div className="flex flex-wrap">
        <div className="p-4 flex flex-col h-full sm:p-7">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <div className="flex m-3">
            <span className="inline-flex items-center w-fit mx-2 bg-blue-100 rounded-full px-5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {type ? type.name : "Loading type..."}
            </span>
            <span className="inline-flex items-center w-fit mx-2 bg-blue-100 rounded-full px-5 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {brand ? brand.name : "Loading brand..."}
            </span>
          </div>
          <p className="text-start font-medium mt-5 text-gray-800">
            {product.description}
          </p>
          <div className="mt-5 sm:mt-auto">
            <p className="text-xs mb-5 text-gray-500">
              Изменен {formatDate(product.updatedAt)}
            </p>
          </div>
          <div className="flex justify-evenly">
            <button
              type="submit"
              onClick={() => navigate(-1)}
              className="flex w-1/3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Назад
            </button>
            <button
              type="submit"
              onClick={buttonSubmitProduct}
              className="flex w-1/3 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
