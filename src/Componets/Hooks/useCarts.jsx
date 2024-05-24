import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./AxiosSecure/useAxiosSecure";
import { useContext } from "react";
import { Context } from "../Authprovider/Authprovider";


const useCarts = () => {
    //  tanstack query
    const axiosSecure = useAxiosSecure()
    const {user}= useContext(Context)

    const { refetch,data: carts=[]} = useQuery({
        
        queryKey:['carts', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [carts, refetch]

};

export default useCarts;