import { useContext } from "react";
import { Context } from "../Authprovider/Authprovider";
import Swal from 'sweetalert2'

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../Hooks/AxiosSecure/useAxiosSecure";


const CheifItem = ({item}) => {
    const {image, name, recipe, price} = item;
    const {user}= useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
     const handleADDCart=item=>{
        console.log(item)
            if(user && user.email){
                const items ={
                    cartId: item,
                    name, price, image,
                    email : user.email
                }
                axios.post('http://localhost:3000/carts', items)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            title: "Success",
                            text: `${name} Cart Added  Successfully`,
                            icon: "success"
                            });
                    }
                })
            }

          else{
            Swal.fire({
                title: "Are you sure?",
                text: "You have to be login first to buy!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "",
                        text: "Thank you!",
                        icon: "success"
                        });
                   navigate('/login', {state:{from: location}})
                }
                });
           }
           
     }

    return (
        <div className="bg-gray-300 p-4 gap-3 flex flex-col justify-center items-center rounded-md">
           <div className="relative w-full">
           <img className="rounded-xl w-full h-[200px]" src={image} alt="" />
           <h1 className="absolute top-2 right-2 bg-gray-100 text-gray-800 font-semibold p-3 rounded-md">${price}</h1>
           </div>
            <h1 className="tex-xl font-bold text-black">{name}</h1>
            <h1 className="text-[13px] text-gray-500 font-semibold">{recipe}</h1>
            <button onClick={()=> handleADDCart(item._id)} className="p-2 px-6 border-b-2  border-b-yellow-500 hover:bg-gray-500 border-yellow-400 rounded-xl text-orange-500  text-[12px]  font-semibold ">ADD TO CART</button>
        </div>
    );
};

export default CheifItem;