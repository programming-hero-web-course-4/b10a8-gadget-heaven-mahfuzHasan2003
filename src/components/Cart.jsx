import { RxCross2 } from "react-icons/rx";
import { getProductsDataFromLS } from "../database/handleLocalStorage";

const Cart = () => {
   const cartAddedData = getProductsDataFromLS("cart");
   return (
      <div className='w-11/12 max-w-7xl mx-auto py-10'>
         {cartAddedData.map((data, idx) => (
            <div
               key={idx}
               className='flex gap-5 bg-white my-5 rounded-md p-5 relative'>
               <div className='max-w-40'>
                  <img
                     src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
                     alt={data.name}
                     className='rounded-md h-full w-full object-cover'
                  />
               </div>
               <div className='space-y-2'>
                  <h3 className='text-2xl font-bold'>{data.name}</h3>
                  <p>{data.description}</p>
                  <h5 className='text-lg font-bold'>Price: ${data.price}</h5>
               </div>
               <button className='absolute -top-2 -right-2'>
                  <RxCross2
                     size={32}
                     color='red'
                     className='bg-red-100 rounded-full p-1'
                  />
               </button>
            </div>
         ))}
      </div>
   );
};

export default Cart;
