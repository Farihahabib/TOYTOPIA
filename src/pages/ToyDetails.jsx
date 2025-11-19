import React from 'react';
import usetoys from '../hooks/usetoys';
import { useParams } from 'react-router';
import { DotLoader } from 'react-spinners';
import MyContainer from '../components/MyContainer';

const ToyDetails = () => {
const {id}= useParams()
  const { toys,loading } = usetoys();
  console.log(toys)
      if(loading) return <DotLoader />;
      const toy = toys.find(t => String(t.toyId) === id);
      console.log("URL id:", id);
console.log("All toy IDs:", toys.map(t => t.toyId));
      console.log(toy)
    //   if(!toy) return <p>Toy is not found</p>
const { pictureURL, toyName,sellerName,sellerEmail,price,rating,availableQuantity,description,subCategory}= toy
    return (
       <>
       <MyContainer className='shadow-xl m-10 rounded-xl'>
         <div className="container  flex justify-center items-center p-5">
         <img src={pictureURL} alt="" />
         </div>
         <div className="details pb-9">
            <p className="name font-bold text-lg text-center">ToyName: {toyName}</p>
            <p className="name font-bold text-lg text-center">SellerName: {sellerName}</p>
            <p className="name font-bold text-lg text-center">SellerEmail: {sellerEmail}</p>
            <p className="name font-bold text-lg text-center">Price: {price}</p>
            <p className="name font-bold text-lg text-center">Rating: {rating}</p>
            <p className="name font-bold text-lg text-center">Available Quantity: {availableQuantity}</p>
            <p className="name font-bold text-lg text-center">Subcategory: {subCategory}</p>
            <p className="name font-bold text-lg text-center">Description: {description}</p>
        
         </div>
       </MyContainer>
      
       
       
       </>
    );
};

export default ToyDetails;