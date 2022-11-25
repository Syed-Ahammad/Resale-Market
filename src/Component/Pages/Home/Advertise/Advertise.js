import React from "react";

const Advertise = () => {
  return (
    <div>
      <div className="card w-fwll bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/900/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
