import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAxiosSecure from "../Hooks/AxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";



const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
   
     const {refetch,data: users=[]}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
             const res = await axiosSecure.get('/users')
             console.log(res);
             return res.data
        }
       
     })


    const hanldeMakeAdmin= id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin him!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.patch(`/users/admin/${id}`)
            .then(res=>{
               if(res.data.modifiedCount > 0){
                 refetch()
                Swal.fire({
                    title: "Updated!",
                    text: "Your make a Admin",
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


     const handleDelete=(id)=>{
        console.log(id)
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
           
            axiosSecure.delete(`/users/${id}`)
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
        <div>
          
            <Title header='how many' underheader='MANAGE ALL USERS'></Title>
            <div  className="max-w-[80%] mx-auto border my-5 bg-slate-100 rounded-md p-3">
            <div className="flex justify-between items-center mx-10">
            <h1 className="text-3xl font-bold my-4">Total Items {users.length}</h1>
          
            </div>
            <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr className="bg-orange-300 p-1 py-3 rounded-md">
                  <th></th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
              {
                 users.map((item,index)=>   <tr key={item._id}>
                     <th>{index+1}</th>
                    
                     <td className="text-xl font-semibold text-gray-600">{item.name}</td>
                     <td className="text-xl font-semibold text-gray-600">{item.email}</td>
                     <td className="text-[15px] font-semibold text-orange-400">
                    {item.role === 'admin' ? 'Admin' : <button onClick={()=>hanldeMakeAdmin(item._id)} className="bg-yellow-500 text-white p-2 rounded-lg text-xl"><FaUser /></button>}
                     </td>
                     <td><button onClick={()=> handleDelete(item._id)} className="bg-red-500 text-white p-2 rounded-lg text-xl"><RiDeleteBin6Line /></button></td>
                   </tr> )
              }
              </tbody>
            </table>
          </div>
             
            </div>
        </div>
    );
};

export default AllUsers;