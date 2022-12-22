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
        <div>
            <p>There are all sellers</p>
        </div>
    );
};

export default AllSellers;