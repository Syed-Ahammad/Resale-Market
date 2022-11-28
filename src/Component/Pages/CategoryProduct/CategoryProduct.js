import React from "react";
import { useLoaderData } from "react-router-dom";

const CategoryProduct = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1 className="text-4xl">All product for category</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {products.map((p) => (
          <div key={p._id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={p.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.category}</h2>
             <div className="grid grid-cols-2 gap-4"> <p>{p.price}</p>
              <p>{p.condition}</p>
              <p>{p.productName}</p></div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
