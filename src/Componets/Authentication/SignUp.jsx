
import { useContext, useState } from 'react';
import '../Authentication/style.css'
import { Context } from '../Authprovider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form"

import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import useSecurePublic from '../Hooks/useSecurePublic';
const SignUp = () => {
  window.scrollTo(0, 0)
    const {CreateUser, Profile}=useContext(Context)
     const [error, setError]= useState('')
     const location = useLocation();
     const dis = location.state || '/'
     const navigate = useNavigate()
     const [show, setShow]= useState(false)
    const axiosSecurePublic = useSecurePublic();

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
         
        Profile(data.DisplayName, data.photoURL)
        .then(res=>{
          console.log(res)
          const userInfo = {
            name : data.DisplayName,
            email : data.email
          }
           axiosSecurePublic.post('/users', userInfo)
          
            
             toast.success('sign up successfully!')
             navigate(dis)
           
        })
        .catch(error=>{
          console.log(error)
          setError(error)
        })
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
                <div className="relative">
                <input type={show ? "text" : 'password'} {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/,
                        message: "Password must contain at least one capital letter and one special character"
                    }
                })} placeholder="password" className="input input-bordered w-full" required />
                <span className="absolute top-4 right-3" onClick={()=>setShow(!show)}>{show ? <FaEye />: <FaEyeSlash />}</span>
                </div>
                {errors.password && errors.password.type === "pattern" && (
                    <p className="text-red-500">Password must contain at least one capital letter and one special character.</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                    <p className="text-red-500">Password must be at least 6 characters long.</p>
                )}
            </div>
                <label className="label">
                  <h1 href="#" className="label-text-alt text-[15px] ">Already Regestered? Go to <Link to='/login' className="font-bold underline relative">Login</Link></h1>
                </label>
                <h1 className='my-4 text-red-400'>{error}</h1>
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