import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { DataContext } from "../context/DataContext";
import {
   getProductsDataFromLS,
   preloadTotalCartPrice,
} from "../database/handleLocalStorage";
import { useState } from "react";

const Layout = () => {
   const [cartProducts, setCartProducts] = useState(
      getProductsDataFromLS("cart")
   );
   const [wishlistProducts, setWishlistProducts] = useState(
      getProductsDataFromLS("wishlist")
   );
   const [cartLength, setCartLength] = useState(
      getProductsDataFromLS("cart").length
   );
   const [wishlistLength, setWishlistLength] = useState(
      getProductsDataFromLS("wishlist").length
   );
   const [totalCartPrice, setTotalCartPrice] = useState(
      preloadTotalCartPrice()
   );
   return (
      <DataContext.Provider
         value={{
            cartLength,
            wishlistLength,
            setCartLength,
            setWishlistLength,
            totalCartPrice,
            setTotalCartPrice,
            cartProducts,
            setCartProducts,
            wishlistProducts,
            setWishlistProducts,
         }}>
         <div>
            <NavBar />
            <Outlet />
            <Footer />
         </div>
      </DataContext.Provider>
   );
};

export default Layout;
