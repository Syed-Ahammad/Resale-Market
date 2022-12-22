import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../../Component/SharedPage/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import UseAdmin from '../../../UseAdmin/UseAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, adminLoading] = UseAdmin(user?.email);
    const location = useLocation();
    console.log(isAdmin, user.email)

    if(adminLoading || loading){
        return <Loading></Loading>;
    }

    if(isAdmin){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate> ;
};

export default AdminRoute;