import { useState } from "react";
import ProductAddForm from "./components/ProductAddForm";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

const App = () => {
  const [productId, setProductId] = useState(null);
  const handleViewProductDeatils = (id) => {
    setProductId(id);
  };
  return (
    <div className='container py-10 mx-auto w-full flex justify-between gap-10 text-white'>
      <div className='w-1/5 relative h-screen'>
        <ProductAddForm />
      </div>
      <div className='w-3/5'>
        <Products onViewProductDeatils={handleViewProductDeatils} />
      </div>
      <div className='w-1/5 relative'>
        {productId && <ProductDetails id={productId} />}
      </div>
    </div>
  );
};

export default App;
