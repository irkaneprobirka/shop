const Input = ({ register, name, placeholder, errors, label }) => {
    return (
      <div className="mt-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <input
          {...register(name, { required: "Это поле обязательно" })}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        {errors && <p>{errors.message}</p>}
      </div>
    );
  };
  
export default Input;