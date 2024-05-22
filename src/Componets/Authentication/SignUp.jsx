
import { useContext, useState } from 'react';
import '../Authentication/style.css'
import { Context } from '../Authprovider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
const SignUp = () => {
  window.scrollTo(0, 0)
    const {CreateUser, Profile}=useContext(Context)
    
     const location = useLocation();
     const dis = location.state || '/'
     const navigate = useNavigate()
     const [show, setShow]= useState(false)
  

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) =>{
       console.log(data)
       CreateUser(data.email,data.password)
       .then(Carent=>{
        console.log(Carent.user)
        // navigate(dis)
        Profile(data.DisplayName, data.photoURL)
        .then(res=>{
          console.log(res)
          
        })
        toast.success('sign up successfully!')
       })
      
      }
    
    return (
        <div className="max-w-7xl mx-auto py-10 style" >
        <div className="hero min-h-screen ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='w-full' src='https://i.postimg.cc/BZM8NsMS/sign-up-8044864-6430773.png' alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("DisplayName", { required: true })} placeholder="Display Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="photourl" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                {errors.email && <span>Email is required</span>}
                </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                </div>
                <label className="label">
                  <h1 href="#" className="label-text-alt text-[15px] ">Already Regestered? Go to <Link to='/login' className="font-bold underline relative">Login</Link></h1>
                </label>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary bg-orange-400 hover:bg-orange-700">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;