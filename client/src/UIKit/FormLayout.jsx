const FormLayout = ({ children, title }) => {
    return (
      <div className="sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg">
        <h1 className="text-start font-semibold text-xl mb-10">{title}</h1>
        {children}
      </div>
    );
  };
  export default FormLayout;
  