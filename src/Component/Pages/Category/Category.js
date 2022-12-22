import { useQuery } from "@tanstack/react-query";
import React from "react";
import {Link} from "react-router-dom";
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
      <h2 className="text-4xl text-center font-bold">
        Choose a Category for Find Your Best Product{" "}
      </h2>
      <div className="divider"></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
        {categories.map((category, i) => (
         <Link key={i} to={`dashboard/products/${category}`}> <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-6xl text-indigo-600 text-center uppercase">{category}</h2>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
