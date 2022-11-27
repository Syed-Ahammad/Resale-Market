import AddProduct from "../../Component/Pages/AddProduct/AddProduct";
import DashboardLayout from "../../Component/Pages/Dashboard/DashboardLayout/DashboardLayout";
import Login from "../../Component/Pages/Login/Login";
import SignUp from "../../Component/Pages/SignUp/SignUp";

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
            element:<DashboardLayout></DashboardLayout>,
            children:[
                {
                    path: '/dashboard/addproduct',
                    element: <AddProduct></AddProduct>
                }
            ]
        }
    ]
);

export default router;