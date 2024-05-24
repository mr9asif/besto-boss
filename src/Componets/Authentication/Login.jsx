import { useContext, useEffect,  useState } from "react";
import { Context } from "../Authprovider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha  } from 'react-simple-captcha';
import toast from "react-hot-toast";
import axios from "axios";
import useSecurePublic from "../Hooks/useSecurePublic";

const Login = () => {
  window.scrollTo(0, 0)
    const {Login, GoogleLogin}=useContext(Context)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // const dis = location.state || '/'
    console.log(location)
   const [er, setEr]= useState('')
     const [disable, setDisable]= useState(true)
     const [cap, setCap]=useState('')
     const axiosSecurePublic = useSecurePublic();


    const handleGoogle=()=>{
       GoogleLogin()
       .then(res=>{
        console.log(res)
        const {email}= res.user
        const us = {email}
        const userInfo = {
          email: res.user.email,
          name: res.user.DisplayName,
        }
        
        axiosSecurePublic.post('/users', userInfo)
        .then(res=>{
          console.log(res.data)
          toast.success('Login Successfully!')
          navigate(from, { replace: true });
        })
       

        axios.post('http://localhost:3000/jwt', us, {withCredentials:true})
        .then(res=>{
          console.log(res.data)
        })
        .catch(error=>{
          console.log(error)
        })
       })
       .catch(error=>{
        console.log(error)
       })
       
    }
    const handleLogin= e =>{
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       const sing = {name, email, password};
       console.log(sing)
       Login(email, password)
       .then(Carent=>{
           console.log(Carent.user)
           toast.success('Login Successfully!')
           navigate(from, { replace: true });
         
            const us = {email}
              axios.post('http://localhost:3000/jwt', us, {withCredentials:true})
              .then(res=>{
                console.log(res.data)
              })
              .catch(error=>{
                console.log(error)
              })
       
       })
       .catch(error=>{
           console.log(error)
          setEr('Invalid email or password')
       })
    }

    useEffect(()=>{
      loadCaptchaEnginge(6); 
    },[])


     const  handleCaptcha = (e)=>{
           e.preventDefault();
        const captcha = e.target.value;
        console.log(captcha)
        if (validateCaptcha(captcha)==true) {
           setDisable(false)
           setCap('')
      }
 
      else {
          setDisable(true)
          setCap('Captcha not match!')
      }
     }
    
    
    return (
        <div className="max-w-7xl mx-auto py-10 style" >
        <div className="hero min-h-screen ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='w-full' src='https://i.postimg.cc/kG1kGwKb/userlog.png' alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
            <form onSubmit={handleLogin} className="card-body">
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered mb-3" required />
                <div>
                <LoadCanvasTemplate />
               
                <input onBlur={handleCaptcha}  type="text" name="captcha" placeholder="Type Captcha" className="input input-bordered w-full" required />
                 <h1 className="text-red-500">{cap}</h1>
               
                </div>
                
                <h1 className="text-red-500">{er}</h1>
                <label className="label">
                  <h1 href="#" className="label-text-alt text-[15px]">Don't have any Account? Go to <Link to='/signup' className="font-bold underline">Sign Up</Link></h1>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button disabled={disable} type='submit' className="btn btn-primary bg-orange-400 hover:bg-orange-700">Sign Up</button>
              </div>
              </form>
              <div className="w-full flex flex-col gap-4 justify-center items-center mx-auto border">
                <h1 className="text-center">or</h1>
                <button onClick={handleGoogle} className="btn btn-outline text-orange-400 w-[80%] mx-auto ">Google</button>
              </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;