const getProductsDataFromLS = (fromWhere) => {
   const data = localStorage.getItem(fromWhere);
   return data ? JSON.parse(data) : [];
};

const cartLength = getProductsDataFromLS("cart").length;

const addProductsToLS = (whatToDo, toWhere, product) => {
   if (whatToDo === "add") {
      let currentData = [product, ...getProductsDataFromLS(toWhere)];
      localStorage.setItem(toWhere, JSON.stringify(currentData));
   }
};

export { getProductsDataFromLS, addProductsToLS, cartLength };
