import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Loading from "../../SharedPage/Loading/Loading";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const {
    data: myProduct = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["seller/myproduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/seller/myproduct?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  refetch();

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>NO.</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Condition</th>
            <th>Verification</th>
            <th>Decition</th>
            <th>Advertise</th>
          </tr>
        </thead>
        <tbody>
          {myProduct.map((product, i) => (
            <tr>
              <th>{i+1}</th>
              <td><img className="mask mask-square w-20" src={product.image} alt=''/></td>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>pending....</td>
              <td>{product.condition}</td>
              <td>
                <button className="btn tn-outline btn-error btn-sm">
                 Delete
                </button>
              </td>
              <td>
                <button className="btn tn-outline btn-error btn-sm">
                 ADS
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
