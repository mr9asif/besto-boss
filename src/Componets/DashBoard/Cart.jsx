import { FaEdit } from "react-icons/fa";
import Title from "../../Shared/Title";
import useCarts from "../Hooks/useCarts";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/AxiosSecure/useAxiosSecure";


const Cart = () => {
    const [carts, refetch]= useCarts();
    const total = carts.reduce((total, current)=> total + current.price, 0 )
    const axiosSecure = useAxiosSecure()

    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/carts/${id}`)
            .then(res=>{
               if(res.data.deletedCount > 0){
                 refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
               }
            })
            .catch(error=>{
                console.log(error)
            })
            
            }
          });
    }
    return (
        <div >
            <Title header='hurry up' underheader='MANAGE ALL ITEMS'></Title>
             <div  className="max-w-[80%] mx-auto border my-5 bg-slate-100 rounded-md p-3">
               <div className="flex justify-between items-center mx-10">
               <h1 className="text-3xl font-bold my-4">Total Items {carts.length}</h1>
               <h1 className="text-3xl font-bold my-4">Total Price ${total}</h1>
               </div>
               <div>
               <div className="overflow-x-auto">
               <table className="table table-zebra">
                 {/* head */}
                 <thead>
                   <tr className="bg-orange-300 p-1 py-3 rounded-md">
                     <th></th>
                     <th>ITEM IMAGE</th>
                     <th>ITEM NAME</th>
                     <th>PRICE</th>
                     <th>ACTION</th>
                     <th>ACTION</th>
                   </tr>
                 </thead>
                 <tbody>
                 {
                    carts.map((item,index)=>   <tr key={item._id}>
                        <th>{index+1}</th>
                        <td><img className="w-[100px] rounded-lg" src={item.image} alt="" /></td>
                        <td className="text-xl font-semibold text-gray-600">{item.name}</td>
                        <td className="text-xl font-semibold text-gray-600">${item.price}</td>
                        <td><button className="bg-yellow-500 text-white p-2 rounded-lg text-xl"><FaEdit /></button></td>
                        <td><button onClick={()=> handleDelete(item._id)} className="bg-red-500 text-white p-2 rounded-lg text-xl"><RiDeleteBin6Line /></button></td>
                      </tr> )
                 }
                 </tbody>
               </table>
             </div>
               </div>
             </div>
        </div>
    );
};

export default Cart;