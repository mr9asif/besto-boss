import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import Dashboard from "../Pages/Dashboard";
import Menu from "../Pages/Menu";
import Shop from "../Pages/Shop";


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
            path:'/shop',
            element:<Shop></Shop>
        },
      ]
    },
  ]);

  export default router;