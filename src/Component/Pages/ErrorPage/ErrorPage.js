import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/f/fe/%E9%9B%B7%E9%81%94%E5%9C%9F%E9%9B%9E%E5%9F%8E%E5%BE%80%E8%A5%BF%E9%82%8A%E6%8B%8D_-_panoramio.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold">OoPs!!</h1>
            <p className="mb-5 text-4xl">404-PAGE NOT FOUND</p>
            <Link to={'/'}><button className="btn btn-primary">BACK TO HOME</button></Link>
          </div>
        </div>
      </div>
    
    );
};

export default ErrorPage;