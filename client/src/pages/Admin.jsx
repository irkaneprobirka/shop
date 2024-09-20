
import { Type } from "../components/Admin/Type";
import { Brand } from "../components/Admin/Brand";
import { Product } from "../components/Admin/Rroduct";

export const Admin = () => {

  return (
    <div className="flex flex-wrap">
      <Type />
      <Brand />
      <Product/>
    </div>
  );
};
