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
  ]);

  export default router;