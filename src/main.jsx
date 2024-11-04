import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Statistics from "./pages/Statistics.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import axios from "axios";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/statistics",
            element: <Statistics />,
         },
         {
            path: "/dashboard",
            element: <Dashboard />,
         },
         {
            path: "/product-details/:id",
            element: <ProductDetails />,
            loader: () => axios.get("/products_data.json"),
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={routes} />
   </StrictMode>
);
