import React, { useState } from 'react';
import usetoys from '../hooks/usetoys';
import { useParams } from 'react-router';
import { DotLoader } from 'react-spinners';
import MyContainer from '../components/MyContainer';

const ToyDetails = () => {
const {id}= useParams()
  const { toys,loading } = usetoys();
 const [isOpen, setIsOpen] = useState(false);

  console.log(toys)
      if(loading) return <DotLoader />;
      const toy = toys.find(t => String(t.toyId) === id);

      
      if(!toy) return <p>Toy is not found</p>
const { pictureURL, toyName,sellerName,sellerEmail,price,rating,availableQuantity,description,subCategory}= toy
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true); 
    e.target.reset();
  };
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
          <h2 className="text-xl font-semibold mb-3 text-center text-teal-800 mx-auto border-b-2">Try This Toy Now</h2>
    <div className='w-3/8 '>
            <form onSubmit={handleSubmit} className="space-y-4 flex flex-col p-8 text-center items-center">

              <input
                type="text"
                name="name"
           
                placeholder="Enter Your Name"
                className="w-full border p-1 rounded-lg"
              />

              <input
                type="email"
                name="email"
               
                placeholder="Enter Your Email"
                className="w-full border p-1 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-teal-600 text-white p-1 rounded-lg hover:bg-teal-700"
              >
                Try Now
              </button>
            </form>
        
            </div>
       </MyContainer>
      
             {isOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center p-5 z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full">

            <h2 className="text-2xl font-bold text-teal-600 text-center mb-3">
              🎉 Success!
            </h2>

            <p className="text-center text-gray-700 mb-5">
              Your request has been submitted successfully.
            </p>

            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
       
       </>
    );
};

export default ToyDetails;