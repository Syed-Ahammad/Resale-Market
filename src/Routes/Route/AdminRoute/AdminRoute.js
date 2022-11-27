import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import UseAdmin from '../../../UseAdmin/UseAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, adminLoading] = UseAdmin(user?.email);
    const location = useLocation();

    if(adminLoading || loading){
        return <progress className="progress w-56"></progress>;
    }

    if(isAdmin & user){
        return children;
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate> ;
};

export default AdminRoute;