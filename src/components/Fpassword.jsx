

import React, { use, useEffect, useRef } from 'react';

import { toast } from 'react-toastify';
import { useLocation, } from 'react-router';
import { AuthContext } from '../Context/AuthContext';



const Fpassword = () => {
        const gmail = "https://mail.google.com/";
 const location = useLocation();
 const {sendPasswordResetEmailFunc} = use(AuthContext)
      const emailRef = useRef();
      useEffect(()=>{
        if(location.state?.email){
            emailRef.current.value = location.state.email;
        }
      },[location.state])

      const handleresetpassword = (e)=>{
  
    e.preventDefault();
    console.log(emailRef.current.value)
    const email= emailRef.current.value;
    if(!email){
        toast.error("Please enter your email address.")
        return
    }

sendPasswordResetEmailFunc( email).then((res)=>{
   console.log(res);
     toast.success("Password reset email sent. Please check your inbox")
     setTimeout(()=>{
        window.open(gmail, "_blank");
     },1000)
   
  
 }).catch((e)=>{
     toast.error(e.message)
 })
    }

      
    return (
        <div>
               
             <title>FPassword</title>
             <div className='flex p-4 flex-col my-4 w-1/3 mx-auto mt-5 bg-teal-400 rounded-xl '>
                 <label className='font-semibold' >email</label>
                 <input
              type="email"
               name='email'
               ref={emailRef}
               placeholder=''
               className='border rounded bg-white'
           />
               <input type="text"  />
                   
               <button onClick={handleresetpassword} type='button' className='hover:underline cursor-pointer'>ResetPassword?</button>
             </div>
              
        </div>
    );
};

export default Fpassword;