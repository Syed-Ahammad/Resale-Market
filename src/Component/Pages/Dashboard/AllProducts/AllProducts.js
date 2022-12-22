import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Loading from '../../../SharedPage/Loading/Loading';

const AllProducts = () => {
    const { user } = useContext(AuthContext);
    const {
      data: allProducts = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["admin/allproduct/:email", user?.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/admin/allproducts/${user?.email}`
        );
        const data = await res.json();
        return data;
    },
    });
    refetch();
  
    console.log(allProducts)
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
          {allProducts.map((product, i) => (
            <tr key={product._id}>
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

export default AllProducts;