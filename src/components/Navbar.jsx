import React, {  useContext } from 'react';
import logo from "../assets/ToyTopia-logo.png";
import MyContainer from './MyContainer';
import MyLink from './MyLink';
import { NavLink} from 'react-router';
import { DotLoader} from "react-spinners";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
    const { user,setUser, logout, loading ,setLoading } =
  useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate(); 
 const handleSignout = () => {
    logout()
           .then(() => {
        toast.success("logout successful");
navigate("/login")
        setUser(null);
        setLoading(false);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
console.log(loading);
 
    return (
       <>
        <MyContainer className="bg-[#06a096] py-3 border-b  border-b-slate-300 ">
    <div className='flex justify-between'>
     <figure className='flex items-center gap-1.5'>
              <img src={logo} className="w-[45px] rounded-4xl" />
              <h3 className='font-bold  text-white text-xl'>ToyTopia</h3>
     </figure>
         <ul className="flex items-center gap-2 ">
           <li>
            <MyLink to={"/"}>Home</MyLink>
          </li>
        {user &&  (<li>
            <MyLink to={"/profile"}>Profile</MyLink>
           </li>
          )}
        {user &&  (<li>
            <MyLink to={"/AllToys"}>AllToys</MyLink>
           </li>
          )}
       
         </ul>
         {loading ?
         (<DotLoader  />) :
         user ?
        <div className='flex gap-2'>
    <div className='relative group overflow-visible'>
    <img src={user?.photoURL|| "https://via.placeholder.com/88"}
   className="h-10 w-10 rounded-full mx-auto"
   alt="user profile" />
            <span className='absolute bottom-1/2 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-white rounded-md opacity-0 group-hover:opacity-100  transition-all font-bold duration-300 '> 
            {user?.displayName || "Anonymous User"}
            </span>  
              </div>
    <button onClick={handleSignout} 
     className='p-1 bg-teal-400 text-white  rounded-md font-semibold cursor-pointer'>{loading ? "Logging out..." : "Logout" }</button>
    </div>
             
         :
<NavLink to={"/login"}>
<button className="bg-teal-400 text-white px-4 ml-4 py-2 rounded-md font-semibold cursor-pointer">Login</button>
</NavLink>
}
</div>
         
    </MyContainer>
  
       </>
    );
};

export default Navbar;





// import { Link, NavLink } from "react-router";
// import logo from "../assets/img/ToyTopia-logo.png";
// import MyContainer from "./MyContainer";
// import MyLink from "./MyLink";
// import { use } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify";
// import { ClockLoader } from "react-spinners";
// // import MyLink from "./MyLink";

// const Navbar = () => {
//   // const result = useContext(AuthContext);
//   const { user, signoutUserFunc, setUser, loading, setLoading } =
//     use(AuthContext);
//   console.log(user);

//   const handleSignout = () => {
//     signoutUserFunc()
//       .then(() => {
//         toast.success("Signout successful");
//         setUser(null);
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

//   console.log(loading);

//   return (
//     <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
//       <MyContainer className="flex items-center justify-between">
//         <figure>
//           <img src={logo} className="w-[55px]" />
//         </figure>
//         <ul className="flex items-center gap-2">
//           <li>
//             <MyLink to={"/"}>Home</MyLink>
//           </li>
//           <li>
//             <MyLink to={"/about-us"}>About US</MyLink>
//           </li>
//           {user && (
//             <li>
//               <MyLink to={"/profile"}>Profile</MyLink>
//             </li>
//           )}
//         </ul>

//         {loading ? (
//           <ClockLoader color="#e74c3c" />
//         ) : user ? (
//           <div className="text-center space-y-3">
//             {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
//             {/* For TSX uncomment the commented types below */}
//             <button
//               className="btn"
//               popoverTarget="popover-1"
//               style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
//             >
//               <img
//                 src={user?.photoURL || "https://via.placeholder.com/88"}
//                 className="h-[40px] w-[40px] rounded-full mx-auto"
//                 alt=""
//               />
//             </button>

//             <div
//               className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
//               popover="auto"
//               id="popover-1"
//               style={
//                 { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
//               }
//             >
//               <h2 className="text-xl font-semibold">{user?.displayName}</h2>
//               <p className="text-white/80">{user?.email}</p>
//               <button onClick={handleSignout} className="my-btn">
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         ) : (
//           <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
//             <Link to={"/signin"}>Sign in</Link>
//           </button>
//         )}
//       </MyContainer>
//     </div>
//   );
// };

// export default Navbar;