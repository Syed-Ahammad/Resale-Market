import React from "react";

const Advertise = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold py-8 text-center mt-4">Advertising product</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        <div className="card w-full bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/900/225/arch" alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Phone</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
