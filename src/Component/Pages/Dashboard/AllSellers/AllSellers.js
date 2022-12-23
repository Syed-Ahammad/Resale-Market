import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Loading from '../../../SharedPage/Loading/Loading';

const AllSellers = () => {
    const {user} = useContext(AuthContext);
    const {data: allSellers = [], refetch, isLoading} = useQuery({queryKey: ["admin/allseller/:email", user?.email],
queryFn: async ()=>{const res = await fetch (`http://localhost:5000/admin/allsellers/${user?.email}`);
const data = await res.json();
return data;}});

refetch();

if(isLoading){
    return <Loading></Loading>
}
return (
    <div className="overflow-x-auto">
    <table className="table table-compact w-full">
      <thead>
        <tr>
          <th>NO.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {allSellers.map((seller, i) => (
          <tr key={seller._id}>
            <th>{i+1}</th>
            <td>{seller.name}</td>
            <td>{seller.email}</td>
            <td>{seller.role}</td>
            <td>
              <button className="btn tn-outline btn-error btn-sm">
               Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    );
};

export default AllSellers;