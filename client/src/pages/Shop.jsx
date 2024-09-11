import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // Импортируем Link
import { getAllProducts } from "../api/shopApi";

export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data.rows);
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  lg:max-w-7xl lg:px-8">
        <h1 className="text-start font-semibold text-xl mb-10">Каталог товаров</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={`/device/${product.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  src={`http://localhost:5000/static/${product.img}`}
                  alt={product.name}
                />
              </div>
              <h3 className="mt-4 h-8 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price} р.</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
