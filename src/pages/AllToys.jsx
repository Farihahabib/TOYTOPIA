import React from 'react';
import usetoys from '../hooks/usetoys';
import { DotLoader } from 'react-spinners';
import ToysCard from '../components/ToysCard';
import MyContainer from '../components/MyContainer';

const AllToys = () => {
     const{toys,loading} = usetoys()
    return (
       <>
       <MyContainer>
        <div className='grid my-7 mx-15 md:mx-9 lg:mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  px-4 md:px-8 lg:px-12 rounded shadow-xl py-9 '>
                          {
    loading ?<DotLoader />
     : 
     (
       toys.map(toy => (
            <ToysCard key={toy.id} toy= {toy} />
        )
        )
    )
 }
      </div> 
       
       </MyContainer>
       </>
    );
};

export default AllToys;