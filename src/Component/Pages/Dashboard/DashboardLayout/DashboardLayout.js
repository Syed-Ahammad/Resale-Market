import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../../../SharedPage/Navbar/Navbar";
import Footer from "../../../SharedPage/Footer/Footer";
import UseAdmin from "../../../../UseAdmin/UseAdmin";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import UseBuyer from "../../../../Hooks/UseBuyer/UseBuyer";
import UseSeller from "../../../../Hooks/UseSeller/UseSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = UseAdmin(user?.email);
  const [isBuyer] = UseBuyer(user?.email);
  const [isSeller] = UseSeller(user?.email);
  // console.log(isSeller, isBuyer, isAdmin)
  const dashboardMenus = (
    <>
      {isAdmin && (
        <>
          <li>
            <Link to={'/dashboard/allproducts'}>All Products</Link>
          </li>
          <li>
            <Link to={'/dashboard/allbuyers'}>All Buyers</Link>
          </li>
          <li>
            <Link to={'/dashboard/allsellers'}>All Sellers</Link>
          </li>
        </>
      )}
      {isSeller && (
        <>
          <li>
            <Link>My Buyers</Link>
          </li>
          <li>
            <Link to={"/dashboard/myproduct"}>My Products</Link>
          </li>
          <li>
            <Link to={"/dashboard/addproduct"}>Add a product</Link>
          </li>
        </>
      )}

      {isBuyer && (
        <>
          <li>
            <Link>My Orders</Link>
          </li>
          <li>
            <Link>My Wishlist</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-page" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-page" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-300 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {dashboardMenus}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
