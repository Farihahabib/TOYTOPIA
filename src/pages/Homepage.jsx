import React from 'react';
import MyContainer from '../components/MyContainer';

const Homepage = () => {
    return (
          <>
        <div>
           <title>ToyTopia - Home</title>
           <MyContainer>
            <h1 className='text-3xl font-bold text-center mt-10'>Welcome to ToyTopia!</h1>
           </MyContainer>
        </div>
        </>
    );
};

export default Homepage;