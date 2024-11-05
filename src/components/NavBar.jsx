import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const NavBar = () => {
   let { pathname } = useLocation();

   const { cartLength, wishlistLength } = useContext(DataContext);
   return (
      <nav
         className={`${
            pathname !== "/"
               ? "bg-white text-black"
               : "bg-primary-blue text-white"
         }`}>
         <div className='w-11/12 max-w-7xl mx-auto space-y-2 md:space-y-0 md:flex py-5 justify-between items-center'>
            <div>
               <Link to='/' className='hidden md:block'>
                  <h2 className='text-2xl font-semibold'>GadgetHeaven</h2>
               </Link>
            </div>
            <ul className='flex gap-5 justify-center md:justify-normal'>
               <NavLink
                  to='/'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  Home
               </NavLink>
               <NavLink
                  to='/statistics'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  Statistics
               </NavLink>
               <NavLink
                  to='/dashboard'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  Dashboard
               </NavLink>
               <NavLink
                  to='/FAQs'
                  className={({ isActive }) => [
                     isActive ? "font-bold underline" : "",
                  ]}>
                  FAQs
               </NavLink>
            </ul>
            <div className='flex gap-4 justify-center md:justify-normal'>
               <button className='border p-2 rounded-full relative'>
                  <IoCartOutline size={25} />
                  {cartLength !== 0 ? (
                     <span className='absolute -top-2 -right-3 bg-white border rounded-full w-6 h-6 text-red-700 text-sm'>
                        {cartLength}
                     </span>
                  ) : (
                     ""
                  )}
               </button>
               <button className='border p-2 rounded-full relative'>
                  <FaRegHeart size={25} />
                  {wishlistLength !== 0 ? (
                     <span className='absolute -top-2 -right-3 bg-white border rounded-full w-6 h-6 text-red-700 text-sm'>
                        {wishlistLength}
                     </span>
                  ) : (
                     ""
                  )}
               </button>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
