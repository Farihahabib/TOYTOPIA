import React from 'react';
import MyContainer from './MyContainer';

const Login = () => {
    return (
        <>
        <MyContainer>
        <div className='flex justify-between items-center justify-center container mx-auto py-12'>
      
    
      <fieldset className="fieldset shadow-2xl border-base-300 bg-teal-400 rounded-box w-xs border  p-4">
       
  <h1 className="fieldset-legend pt-5 flex justify-center items-center text-xl text-white font-bold">Login</h1>
  <label className="label">Email</label>
  <input type="email" className="input bg-teal-50" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" className="input bg-teal-50" placeholder="Password" />

  <button className="btn btn-neutral bg-teal-800 mt-4">Login</button>
 
</fieldset>

 </div>
 </MyContainer>
        </>
    );
};

export default Login;