import { Link } from "react-router-dom";

const Product = ({ product }) => {
   const { id, name, image, price } = product;
   return (
      <div className='p-3 bg-white shadow-md flex flex-col gap-3 rounded-md'>
         <img
            src='https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp'
            alt={name}
            className='aspect-[4/3] object-cover rounded-md'
         />
         <h3 className='text-xl font-semibold'>{name}</h3>
         <p>
            <span className='font-semibold'>Price:</span> ${price}
         </p>
         <Link to={`/product-details/${id}`} className='mt-auto'>
            <button className='px-4 py-2 border border-primary-blue rounded-md hover:bg-primary-blue hover:text-white'>
               View Details
            </button>
         </Link>
      </div>
   );
};

export default Product;
