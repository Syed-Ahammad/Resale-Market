import AddProduct from "../../Component/Pages/AddProduct/AddProduct";
import Blogs from "../../Component/Pages/Blogs/Blogs";
import CategoryProduct from "../../Component/Pages/CategoryProduct/CategoryProduct";
import AllBuyers from "../../Component/Pages/Dashboard/AllBuyers/AllBuyers";
import AllProducts from "../../Component/Pages/Dashboard/AllProducts/AllProducts";
import AllSellers from "../../Component/Pages/Dashboard/AllSellers/AllSellers";
import DashboardLayout from "../../Component/Pages/Dashboard/DashboardLayout/DashboardLayout";
import ErrorPage from "../../Component/Pages/ErrorPage/ErrorPage";
import Login from "../../Component/Pages/Login/Login";
import MyProducts from "../../Component/Pages/MyProducts/MyProducts";
import SignUp from "../../Component/Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Component/Main/Main");
const { default: Home } = require("../../Component/Pages/Home/Home/Home");

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path:'/blogs',
                    element: <Blogs></Blogs>
                }
            ]
        },
        {
            path: '/dashboard',
            element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            errorElement: <ErrorPage></ErrorPage>,
            children:[
                {
                    path: '/dashboard/addproduct',
                    element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                },
                {
                    path: '/dashboard/myproduct',
                    element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
                },
                {
                    path: '/dashboard/products/:category',
                    element: <PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
                    loader: async ({ params }) => {
                        return fetch(`http://localhost:5000/dashboard/products/${params.category}`);
                      },
                },
                {
                    path: '/dashboard/allproducts',
                    element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
                },
                {
                    path: '/dashboard/allbuyers',
                    element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
                },
                {
                    path: '/dashboard/allsellers',
                    element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
                }
            ]
        }
    ]
);

export default router;