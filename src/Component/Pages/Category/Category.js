import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../SharedPage/Loading/Loading";

const Category = () => {
  const {
    data: categories = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/category`);
      const data = await res.json();
      return data;
    },
  });
  refetch();

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-4 ">
      <h2 className="text-2xl text-center font-bold">
        Choose a Category for Find Your Best Product{" "}
      </h2>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
        {categories.map((category) => (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
    </div>
  );
};

export default Category;
