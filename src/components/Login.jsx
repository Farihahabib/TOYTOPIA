import React, { useState } from 'react';
import MyContainer from './MyContainer';
import { FaEye, FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router';
import { IoEyeOff } from 'react-icons/io5';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/AuthContext';
import { app } from '../Firebase/firebase.config';




const Login = () => {
    const navigate = useNavigate();
    const [show , setshow]=useState(false);
    const {setUser} = useAuth();
   const googleprovider = new GoogleAuthProvider();
    const handlelogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log("logged in",{email,password})
        const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password).then((res)=>{
    console.log(res);
const user = res.user;
setUser(user);
    toast.success(" Successfully Logged In")
        navigate("/");
}).catch((e)=>{
toast.error(e.message)
}
)
 
}

const handlegooglelogin = (e)=>{
    e.preventDefault();
      console.log("google login")
      const auth = getAuth();
signInWithPopup(auth, googleprovider)
.then((res)=>{
    console.log(res);
    navigate("/");

    toast.success(" Successfully Logged In")
}).catch((e)=>{
toast.error(e.message)
})
}
    return (
        <>
            <title>ToyTopia - Login</title>
        <MyContainer>
        <div className='flex  items-center justify-center container mx-auto py-12'>
      
    
      <form onSubmit={handlelogin} className="fieldset shadow-2xl border-base-300 bg-teal-400 rounded-box w-xs border  p-4">
       
  <h1 className="fieldset-legend pt-5 flex justify-center items-center text-xl text-white font-bold">Login</h1>
  <label className="label font-bold ">Email</label>
  <input type="email" name='email' className="input bg-teal-50" placeholder="Email" />

  <div className='relative'>
    <label className="label font-bold ">Password</label>
    <input type={show ? "text" :"password" } name='password'  className="input bg-teal-50 h-7" placeholder="Password" />
    <span onClick={()=>setshow(!show)} className=' absolute right-2  top-[26px] z-50'>{show ? <FaEye /> : <IoEyeOff />}</span>
  </div>

  <button className="btn btn-neutral bg-teal-800 mt-4">Login</button>

  <button onClick={handlegooglelogin} className="btn btn-neutral bg-teal-600 border-none mt-4"><FaGoogle />Continue With Google</button>
  <p className='text-white font-bold text-center py-3'>Can't have an account?<NavLink to={'/Register'}><button className='border-b'>...Register Now</button></NavLink> </p>
 
</form>

 </div>
 </MyContainer>
        </>
    );
};

export default Login;