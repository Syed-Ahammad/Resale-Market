import {useState, useEffect} from 'react';
const UseSeller = email=>{
    const [isSeller , setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(true);
    // console.log(email)

    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/user/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                setSellerLoading(false)
                // console.log(data.isSeller)
            })
        }
    },[email]);
    return [isSeller, sellerLoading];
};

export default UseSeller;