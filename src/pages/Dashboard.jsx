import { useState } from "react";
import { ImEqualizer2 } from "react-icons/im";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const Dashboard = () => {
   const [activeCart, setActiveCart] = useState("Cart");
   return (
      <section className='bg-gray-100'>
         <div className='bg-primary-blue'>
            <div className='w-11/12 max-w-7xl mx-auto text-white text-center py-10 space-y-3'>
               <h2 className='text-3xl font-bold'>Product Details</h2>
               <p className='max-w-2xl mx-auto'>
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to the coolest accessories,
                  we have it all!
               </p>
               <div>
                  <button
                     className={`px-10 py-2 rounded-full font-bold mr-2 md:mr-5 border ${
                        activeCart === "Cart"
                           ? "bg-white text-primary-blue"
                           : ""
                     }`}
                     onClick={() => setActiveCart("Cart")}>
                     Cart
                  </button>
                  <button
                     className={`px-10 py-2 rounded-full font-bold border ${
                        activeCart === "Wishlist"
                           ? "bg-white text-primary-blue"
                           : ""
                     }`}
                     onClick={() => setActiveCart("Wishlist")}>
                     Wishlist
                  </button>
               </div>
            </div>
         </div>

         <div className='w-11/12 max-w-7xl mx-auto py-10'>
            <div className='flex items-end md:items-center justify-between'>
               <h3 className='font-bold text-2xl'>
                  {activeCart === "Cart" ? "Cart" : "Wishlist"}
               </h3>
               {activeCart === "Cart" ? (
                  <div className='md:flex items-center gap-3 space-y-2 md:space-y-0 text-right'>
                     <h3 className='font-bold text-xl'>Total cost: $000.00</h3>
                     <button className='flex items-center gap-2 font-bold border border-primary-blue px-6 py-2 rounded-full text-primary-blue ml-auto'>
                        Sort by Price <ImEqualizer2 size={14} />
                     </button>
                     <button className='px-6 py-2 rounded-full bg-primary-blue border border-primary-blue text-white font-bold'>
                        Purchase
                     </button>
                  </div>
               ) : (
                  ""
               )}
            </div>
         </div>

         {activeCart === "Cart" ? <Cart /> : <Wishlist />}
      </section>
   );
};

export default Dashboard;
