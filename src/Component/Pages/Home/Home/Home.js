import React from 'react';
import Category from '../../Category/Category';
import Support from '../../Support/Support';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='my-6'>
          <Banner></Banner>
          <Category></Category>
          <Advertise></Advertise>
          <Support></Support>
        </div>
    );
};

export default Home;