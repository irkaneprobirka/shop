 const SubmitButton = ({ label }) => {
    return (
      <button
        type="submit"
        className="flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500"
      >
        {label}
      </button>
    );
  };
  export default SubmitButton;