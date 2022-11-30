import React from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

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
              <img className="h-56" src={p.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Category: {p.category}</h2>
             <div className="grid grid-cols-2 gap-4"> <p>Price:{p.price}</p>
              <p>Condition: {p.condition}</p>
              <p>Product Name: {p.productName}</p></div>
              <div className="card-actions justify-end">
                <label htmlFor="modal-for-booking" className="btn btn-primary">Buy  Now</label>
              </div>
            </div>
            <BookingModal product={p}></BookingModal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
