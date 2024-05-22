import { useContext } from "react";
import { Context } from "../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
      const location=useLocation()
     const {user}= useContext(Context);
     if(user){
        return children;
     }
      else{
        return <Navigate to='/login' state={{from: location}}></Navigate>
      }
};

export default PrivetRoute;