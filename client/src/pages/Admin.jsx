import { useSelector } from "react-redux";
import { createBrand, createType, createDevice } from "../api/adminApi";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Admin = () => {
  const token = useSelector((state) => state.user.token);

  const {
    register: registerType,
    handleSubmit: handleSubmitType,
    formState: { errors: errorsType },
    reset: resetType,
  } = useForm();

  const {
    register: registerBrand,
    handleSubmit: handleSubmitBrand,
    formState: { errors: errorsBrand },
    reset: resetBrand,
  } = useForm();

  const {
    register: registerDevice,
    handleSubmit: handleSubmitDevice,
    formState: { errors: errorsDevice },
    reset: resetDevice,
  } = useForm();

  const [createdType, setCreatedType] = useState(null);

  const onSubmitType = async (data) => {
    try {
      const type = await createType(data.name, token);
      setCreatedType(type);
      resetType();
      console.log("Тип создан:", type);
    } catch (error) {
      console.error("Ошибка создания типа:", error);
    }
  };

  const onSubmitBrand = async (data) => {
    try {
      const brand = await createBrand(data.brand, token);
      resetBrand(); 
      console.log("Бренд создан:", brand);
    } catch (error) {
      console.error("Ошибка создания бренда:", error);
    }
  };

  // Обработчик для создания устройства
  const onSubmitDevice = async (data) => {
    try {
      const device = await createDevice({ ...data, token });
      resetDevice();
      console.log("Устройство создано:", device);
    } catch (error) {
      console.error("Ошибка создания устройства:", error);
    }
  };

  return (
    <div className="flex mt-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg">
        <form onSubmit={handleSubmitType(onSubmitType)}>
          <h1 className="text-start font-semibold text-xl mb-10">
            Добавить тип продукта
          </h1>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Тип продукта
          </label>
          <div className="mt-2">
            <input
              {...registerType("name", { required: "Это поле обязательно" })}
              placeholder="Введите тип"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errorsType.name && <p>{errorsType.name.message}</p>}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
          >
            Создать
          </button>
        </form>
      </div>

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
              {...registerBrand("brand", { required: "Это поле обязательно" })}
              placeholder="Введите бренд"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errorsBrand.brand && <p>{errorsBrand.brand.message}</p>}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
          >
            Создать
          </button>
        </form>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg">
        <form onSubmit={handleSubmitDevice(onSubmitDevice)}>
          <h1 className="text-start font-semibold text-xl mb-10">
            Добавить новый продукт
          </h1>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Название продукта
          </label>
          <div className="mt-2">
            <input
              {...registerDevice("name", { required: "Это поле обязательно" })}
              placeholder="Введите название"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errorsDevice.name && <p>{errorsDevice.name.message}</p>}
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
          >
            Создать
          </button>
        </form>
      </div>
    </div>
  );
};
