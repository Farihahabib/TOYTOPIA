import React from 'react';
import { MdYard } from 'react-icons/md';
import MyLink from './MyLink';

const ToysCard = ({toy}) => {

    return (
        <>
<div className="rounded-xl shadow-2xl ">
    <img src={toy.pictureURL} alt=""  className='rounded-t-2xl h-40 w-full'/>
   <div className='p-4'>
    <h1 className="toyName font-semibold">ToyName:  {toy.toyName}</h1>
    <p className="rating font-semibold">Rating:  {toy.rating}</p>
    <p className="Quantity font-semibold">AvailableQuantity:  {toy.availableQuantity}</p>
    <p className="price font-semibold">Price:  {toy.price}</p>
    <div className='items-center flex justify-center  bg-teal-600 text-white hover:bg-teal-700'>
   <MyLink to={`/ToyDetails/${toy.toyId}`}> <button className="details items-center">View Details</button>
</MyLink>

</div>
       </div> 
       </div>
        </>
    );
};

export default ToysCard;