import {useState, useEffect} from 'react';
const UseSeller = email=>{
    const [isSeller , setIsSeller] = useState(false);
    const [sellerLoading, setSellerLoading] = useState(false);

    useEffect(()=>{
        if(email){
            fetch(`https://resale-market-server-eight.vercel.app/user/seller/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSeller(data.isSeller)
                setSellerLoading(false)
                // console.log(data.isAdmin)
            })
        }
    },[email]);
    return [isSeller, sellerLoading];
};

export default UseSeller;