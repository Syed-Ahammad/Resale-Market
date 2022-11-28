import {useState, useEffect} from 'react';
const UseSeller = email=>{
    const [isSeller , setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(false);

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isBuyer)
                setSellerLoading(false)
                // console.log(data.isAdmin)
            })
        }
    },[email]);
    return [isSeller, sellerLoading];
};

export default UseSeller;