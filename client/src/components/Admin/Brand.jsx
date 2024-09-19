import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createBrand} from "../../api/adminApi";

export const Brand = () => {
  const token = useSelector((state) => state.user.token);
  const [createdBrand, setCreatedBrand] = useState(null);
  const {
    register: registerBrand,
    handleSubmit: handleSubmitBrand,
    formState: { errors: errorsBrand },
    reset: resetBrand,
  } = useForm();

  const onSubmitBrand = async (data) => {
    try {
      const brand = await createBrand(data.name, token);
      setCreatedBrand(brand);
      resetBrand();
      console.log("Brand создан:", brand);
    } catch (error) {
      console.error("Ошибка создания brand:", error);
    }
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg">
      <form onSubmit={handleSubmitBrand(onSubmitBrand)}>
        <h1 className="text-start font-semibold text-xl mb-10">
          Добавить бренд продукта
        </h1>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Бренд продукта
        </label>
        <div className="mt-2">
          <input
            {...registerBrand("name", { required: "Это поле обязательно" })}
            placeholder="Введите бренд"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {errorsBrand.name && <p>{errorsBrand.name.message}</p>}
        </div>
        <button
          type="submit"
          className="flex w-full mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
        >
          Создать
        </button>
      </form>
    </div>
  );
};
