import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { createType } from "../../api/adminApi";

export const Type = () => {
  const token = useSelector((state) => state.user.token);
  const [createdType, setCreatedType] = useState(null);
  const {
    register: registerType,
    handleSubmit: handleSubmitType,
    formState: { errors: errorsType },
    reset: resetType,
  } = useForm();

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

  return (
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
          className="flex w-full mt-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
        >
          Создать
        </button>
      </form>
    </div>
  );
};
