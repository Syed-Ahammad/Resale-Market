import {useState, useEffect} from 'react';
const UseAdmin = email=>{
    const [isAdmin , setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(false);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setAdminLoading(false)
                // console.log(data.isAdmin)
            })
        }
    },[email]);
    return [isAdmin, adminLoading];
};

export default UseAdmin;