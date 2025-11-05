import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayouts = () => {
    return (
       <>

       <Navbar />
       <div className='max-w-screen-2xl  mx-auto w-full  flex-1'>
<Outlet />
  </div>
       <Footer />
   
       </>
    );
};

export default MainLayouts;