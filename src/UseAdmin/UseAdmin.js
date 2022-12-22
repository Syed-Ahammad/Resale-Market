import {useState, useEffect} from 'react';
const UseAdmin = email=>{
    const [isAdmin , setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin)
                setAdminLoading(false)
            })
        }
    },[email]);
    console.log(isAdmin)
    return [isAdmin, adminLoading];
};

export default UseAdmin;