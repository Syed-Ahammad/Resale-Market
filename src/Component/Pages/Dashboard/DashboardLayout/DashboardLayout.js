import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../SharedPage/Navbar/Navbar";
import Footer from "../../../SharedPage/Footer/Footer";

const DashboardLayout = () => {
  return (
  <div>
      <Navbar></Navbar>
   <div className="drawer drawer-mobile">
   <input id="dashboard-page" type="checkbox" className="drawer-toggle" />
   <div className="drawer-content flex flex-col items-center justify-center">
     {/* <!-- Page content here --> */}
    <Outlet></Outlet>
   
   </div> 
   <div className="drawer-side">
     <label htmlFor="dashboard-page" className="drawer-overlay"></label> 
     <ul className="menu p-4 w-80 bg-base-100 text-base-content">
       {/* <!-- Sidebar content here --> */}
       <li><Link>All Products</Link></li>
       <li><Link>All users</Link></li>
       <li><Link to={'/dashboard/addproduct'}>Add a product</Link></li>
     </ul>
   
   </div>
 </div>
 <Footer></Footer>
  </div>
  );
};

export default DashboardLayout;
