import bannerImg from "../assets/banner.jpg";
const HeaderBanner = () => {
   return (
      <section className='mb-36 md:mb-60 lg:mb-80'>
         <div className='bg-primary-blue text-white py-10 relative'>
            <div className='w-11/12 max-w-7xl mx-auto space-y-4 text-center mb-20 md:mb-44 lg:mb-64'>
               <h1 className='text-5xl font-bold leading-snug'>
                  Upgrade Your Tech Accessorize with Gadget Heaven Accessories
               </h1>
               <p className='max-w-2xl mx-auto'>
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to the coolest accessories,
                  we have it all!
               </p>
               <button className='font-bold text-primary-blue bg-white px-6 py-2 rounded-full'>
                  Shop Now
               </button>
            </div>
         </div>
         <div className='w-3/4 max-w-4xl p-2 md:p-5 bg-[#ffffff26] rounded-lg border absolute -translate-y-1/2 mx-auto left-0 right-0'>
            <img
               src={bannerImg}
               alt='Banner Image'
               className='rounded-lg aspect-video object-cover'
            />
         </div>
      </section>
   );
};

export default HeaderBanner;
