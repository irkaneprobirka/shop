import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createDevice } from "../../api/adminApi"; // Импортируем обновленную функцию
import { getAllBrands, getAllTypes } from "../../api/shopApi";
import FormLayout from "../../UIKit/FormLayout";
import Input from "../../UIKit/Input";
import Dropdown from "../../UIKit/Dropdown";
import SubmitButton from "../../UIKit/SubmitButton";

export const Product = () => {
  const token = useSelector((state) => state.user.token);
  const [types, setTypes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(""); // Для отображения имени файла
  const [selectedFile, setSelectedFile] = useState(null); // Для хранения выбранного файла

  useEffect(() => {
    const fetchData = async () => {
      const typesData = await getAllTypes();
      const brandsData = await getAllBrands();
      setTypes(typesData);
      setBrands(brandsData);
    };
    fetchData();
  }, []);

  const {
    register: registerDevice,
    handleSubmit: handleSubmitDevice,
    setValue,
    formState: { errors: errorsDevice },
    reset: resetDevice,
  } = useForm();

  const onSubmitDevice = async (data) => {
    // Создаем FormData и передаем его в createDevice
    const deviceData = {
      name: data.name,
      typeId: data.typeId,
      brandId: data.brandId,
      price: data.price,
      img: selectedFile, // Передаем файл
      token,
    };

    try {
      await createDevice(deviceData); // Отправляем данные с изображением
      resetDevice();
      setSelectedFileName(""); // Сбрасываем выбранный файл
      setSelectedFile(null); // Сбрасываем файл
    } catch (error) {
      console.error("Ошибка создания устройства:", error);
    }
  };

  const handleSelectType = (typeId) => {
    setSelectedTypeId(typeId);
    setValue("typeId", typeId);
  };

  const handleSelectBrand = (brandId) => {
    setSelectedBrandId(brandId);
    setValue("brandId", brandId);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name); // Устанавливаем имя выбранного файла
      setSelectedFile(file); // Устанавливаем файл для отправки
    } else {
      setSelectedFileName(""); // Сбрасываем имя, если файл не выбран
      setSelectedFile(null); // Сбрасываем файл
    }
  };

  return (
    <FormLayout title="Добавить новый продукт">
      <form onSubmit={handleSubmitDevice(onSubmitDevice)}>
        <Input
          register={registerDevice}
          name="name"
          placeholder="Введите название"
          errors={errorsDevice.name}
        />

        <Dropdown
          items={types}
          selectedItem={types.find((type) => type.id === selectedTypeId)}
          onSelectItem={handleSelectType}
          placeholder="Выберите тип"
        />

        <input
          type="hidden"
          {...registerDevice("typeId", { required: "Тип обязателен" })}
        />
        {errorsDevice.typeId && <p>{errorsDevice.typeId.message}</p>}

        <Dropdown
          items={brands}
          selectedItem={brands.find((brand) => brand.id === selectedBrandId)}
          onSelectItem={handleSelectBrand}
          placeholder="Выберите бренд"
        />

        <input
          type="hidden"
          {...registerDevice("brandId", { required: "Бренд обязателен" })}
        />
        {errorsDevice.brandId && <p>{errorsDevice.brandId.message}</p>}

        <Input
          register={registerDevice}
          name="price"
          placeholder="Введите стоимость"
          errors={errorsDevice.price}
        />

        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Выберите фото
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Загрузить изображение</span>
                  <input
                    id="file-upload"
                    name="img"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange} // Обрабатываем выбор файла
                  />
                </label>
                <p className="pl-1">перетащите фотографию</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>

              {/* Отображаем имя выбранного файла */}
              {selectedFileName && (
                <p className="text-sm leading-6 text-gray-600 mt-2">
                  Выбранный файл: {selectedFileName}
                </p>
              )}
            </div>
          </div>
        </div>

        <SubmitButton label="Создать" />
      </form>
    </FormLayout>
  );
};
