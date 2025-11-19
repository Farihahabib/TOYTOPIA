import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import MyContainer from '../components/MyContainer';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
     const { user} =
      useContext(AuthContext);
       const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const handlesubmit =async (e)=>{
e.preventDefault()
setError("")
try{
await updateProfile(user,{
    displayName: name,
    photoURL: photoURL
});
setIsOpen(true);
}
catch(e){
    setError(e.message)
}
  }
    return (
      <>
        <title> My Profile</title>
       <MyContainer>
       <div className="box m-9 flex flex-col items-center justify-center">
        <div className="img ">
            <img src={user?.photoURL|| "https://via.placeholder.com/88"} alt="" className='rounded-full w-50 h-50' />
        </div>
        <div className="info">
            <p className="name text-center font-semibold text-lg"> {user?.displayName || "Anonymous User"}</p>
            <p className="email text-center font-semibold text-lg">{user?.email}</p>

        </div>
       </div>


        <h1 className="text-2xl font-semibold text-teal-700 mb-6 text-center border-b"> Update Your Profile</h1>
    <form onSubmit={handlesubmit} className="box space-y-4 space-x-4 my-9 container w-3/7  items-center justify-center">
        <label className="font-semibold text-gray-700">Name</label>
        <input
                type="text"
                className="w-full border rounded-lg p-1 mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
         <label className="font-semibold text-gray-700">PhotoURL</label>
        <input
                type="text"
                className="w-full border rounded-lg p-1 mt-1"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                required />
              <button
              type="submit"
              className=" bg-teal-600 text-white p-1 px-4 rounded-lg hover:bg-teal-700" >
              Save Changes
            </button>
    </form>
      </MyContainer> 

         {isOpen && (
        <div className="fixed inset-0  p-30 flex items-center justify-center  z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full">

            <h2 className="text-2xl font-bold text-teal-600 text-center mb-3">
              ✅ Profile Updated!
            </h2>
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

export default Profile;