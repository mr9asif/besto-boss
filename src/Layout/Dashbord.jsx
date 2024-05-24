import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaBook, FaUsers } from "react-icons/fa6";
import { MdAddBusiness } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashbord = () => {
     const isAdmin = true;
    return (
        <div className="max-w-8xl mx-auto flex items-center  gap-8">
            <div className="w-64 min-h-screen flex flex-col justify-start items-center pl-3 pt-5 bg-orange-300 p-2">
            <h1 className="text-2xl font-extrabold text-white">BISTRO BOOS</h1>
                        <h1 className="text-[13px] tracking-[9px] font-bold text-white pb-10">RESTAURANT</h1>
              
                {
                    isAdmin ? <>
                    <ul className="gap-4">
                    <li className="flex items-center gap-1 font-bold text-[17px] mb-5">
                    
                    <NavLink className={({ isActive }) => isActive ? 'text-white font-bold bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/dashboard/admin'>
                    <FaHome className="font-extrabold" />
                    ADMIN HOME</NavLink>
                    </li>
  
                    <li className="flex items-center gap-1 font-bold text-[17px] mb-5">
                    
                    <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/dashboard/additems'>
                    <MdAddBusiness className="font-extrabold" />
                    ADD ITEMS</NavLink>
                    </li>
                 
                
                    <li className="flex items-center gap-1 font-bold text-[17px] mb-5">
                   
                    <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/dashboard/carts'>
                    <AiOutlineMenuUnfold className="font-extrabold" />
                    MANAGE ITEMS</NavLink>
                    </li>
                    <li className="flex items-center gap-1 font-bold text-[17px] mb-5">
                    
                    <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-1 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/dashboard/managebookings'>
                    <FaBook className="font-extrabold" />
                    MANAGE BOOKINGS</NavLink>
                    </li>
                    <li className="flex items-center gap-1 font-bold text-[17px]">
                    
                    <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/dashboard/allusers'>
                    <FaUsers className="font-extrabold" />
                    ALL USERS</NavLink>
                    </li>
                     <hr className="w-full my-8"/>
                    
                     <li className="flex items-center gap-1 font-bold text-[17px] mb-5">
                    
                     <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/'>
                     <FaHome className="font-extrabold" />
                     Home</NavLink>
                     </li>
                     <li className="flex items-center gap-1 font-bold text-[17px] mb-5">
                    
                     <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/'>
                     <FaHome className="font-extrabold" />
                     MENU</NavLink>
                     </li>
                     <li className="flex items-center gap-1 font-bold text-[17px] mb-5">
                    
                     <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/'>
                     <FaHome className="font-extrabold" />
                     SHOP</NavLink>
                     </li>
                     <li className="flex items-center gap-1 font-bold text-[17px] mb-4">
                    
                     <NavLink className={({ isActive }) => isActive ? 'text-white font-bold  bg-blue-700 p-1 rounded-md px-4 flex items-center gap-1' : 'text-black font-bold flex items-center gap-1'} to='/'>
                     <FaHome className="font-extrabold" />
                     CONTACT</NavLink>
                     </li>
                  </ul>
                    </>
                    :
                    <>
                    
                    </>
                }
            </div>
            <div className="flex-1 items-start">
             <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;