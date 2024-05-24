import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import Dashboard from "../Pages/Dashboard";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";
import SignUp from "../Componets/Authentication/SignUp";
import Login from "../Componets/Authentication/Login";
import PrivetRoute from "../Componets/PrivetRoute/PrivetRoute";
import Dashbord from "../Layout/Dashbord";
import Cart from "../Componets/DashBoard/Cart";
import Admin from "../Componets/DashBoard/Admin";
import AddItems from "../Componets/DashBoard/AddItems";
import AllUsers from "../Componets/DashBoard/AllUsers";
import ManageBookings from "../Componets/DashBoard/ManageBookings";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/contactus',
            element:<ContactUs></ContactUs>
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/shop/:category',
            element:<PrivetRoute>
            <Shop></Shop>
            </PrivetRoute>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
      ]
    },
    {
        path:'/dashboard',
        element:<Dashbord></Dashbord>,
        children:([
            {
                path:'/dashboard/carts',
                element:<Cart></Cart>
            },
            {
                path:'/dashboard/admin',
                element:<Admin></Admin>
            },
            {
                path:'/dashboard/additems',
                element:<AddItems></AddItems>
            },
            {
                path:'/dashboard/managebookings',
                element:<ManageBookings></ManageBookings>
            },
            {
                path:'/dashboard/allusers',
                element:<AllUsers></AllUsers>
            },
        ])
    }
  ]);

  export default router;