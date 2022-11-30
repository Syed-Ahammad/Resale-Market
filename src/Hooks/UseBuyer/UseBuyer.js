import {useState, useEffect} from 'react';
const UseBuyer = email=>{
    const [isBuyer , setIsBuyer] = useState(false);
    const [buyerLoading, setBuyerLoading] = useState(false);

    useEffect(()=>{
        if(email){
            fetch(`https://resale-market-server-eight.vercel.app/user/buyer/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyer(data.isBuyer)
                setBuyerLoading(false)
                // console.log(data.isAdmin)
            })
        }
    },[email]);
    return [isBuyer, buyerLoading];
};

export default UseBuyer;