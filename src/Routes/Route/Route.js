import AddProduct from "../../Component/Pages/AddProduct/AddProduct";
import DashboardLayout from "../../Component/Pages/Dashboard/DashboardLayout/DashboardLayout";
import Login from "../../Component/Pages/Login/Login";
import MyProducts from "../../Component/Pages/MyProducts/MyProducts";
import SignUp from "../../Component/Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Component/Main/Main");
const { default: Home } = require("../../Component/Pages/Home/Home/Home");

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
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
            ]
        },
        {
            path: '/dashboard',
            element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
            children:[
                {
                    path: '/dashboard/addproduct',
                    element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
                },
                {
                    path: '/dashboard/myproduct',
                    element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
                }
            ]
        }
    ]
);

export default router;