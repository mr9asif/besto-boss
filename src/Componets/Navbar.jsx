import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Context } from "./Authprovider/Authprovider";
import axios from "axios";

const Navbar = () => {
    const { user, Signout } = useContext(Context);

  console.log(user)
    const handleSignout = ()=>{
        Signout()
        axios.post('http://localhost:3000/logout', {withCredentials:true})
    }

    return (
        <div className="max-w-8xl mx-auto bg-black fixed z-30 bg-opacity-30 ">
            <div className="navbar bg-black fixed z-10 bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-black font-bold'}>HOME</NavLink>
                            <NavLink to='/contactus' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-black font-bold'}>CONTACT US</NavLink>
                            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-black font-bold'}>DASHBOARD</NavLink>
                            <NavLink to='/menu' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-black font-bold'}>OUR MENU</NavLink>
                          {
                            user &&   <NavLink to='/shop/salad' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-black font-bold'}>OUR SHOP</NavLink>
                          }
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center px-5">
                        <h1 className="text-2xl font-extrabold text-white">BISTRO BOOS</h1>
                        <h1 className="text-[13px] tracking-[9px] font-bold text-white">RESTAURANT</h1>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="hidden lg:flex justify-center items-center">
                        <ul className="menu menu-horizontal px-1 gap-5">
                            <NavLink to='/' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-white font-bold'}>HOME</NavLink>
                            <NavLink to='/contactus' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-white font-bold'}>CONTACT US</NavLink>
                            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-white font-bold'}>DASHBOARD</NavLink>
                            <NavLink to='/menu' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-white font-bold'}>OUR MENU</NavLink>
                            {
                                user &&  <NavLink to='/shop/salad' className={({ isActive }) => isActive ? 'text-[#EEFF25] font-bold' : 'text-white font-bold'}>OUR SHOP</NavLink>
                            }
                        </ul>
                    </div>
                    <div className="mx-3 flex justify-center items-center gap-4">
                        {
                            user ? (
                                <div className="flex items-center gap-3">
                                <Link to='/login' onClick={handleSignout} className="btn btn-outline btn-warning">Sign out</Link>
                                   {
                                    user?.photoURL ? <img className="w-[45px] h-[45px] rounded-[50%]" src={user.photoURL} alt="" /> :   <img className="w-[40px] rounded-[50%]" src="https://i.postimg.cc/P58TZBGV/360-F-332596535-l-Ad-Lhf6-Kzb-W6-PWXBWe-IFTov-Tii1drkb-T.jpg" alt="User" /> 
                                   }
                                </div>
                            ) : (
                                <div className="flex gap-4">
                                    <Link to='/signup' className="btn btn-outline btn-warning">Sign up</Link>
                                    <Link to='/login' className="btn btn-outline btn-warning">Log In</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
