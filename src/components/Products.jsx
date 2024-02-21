import { useMutation, useQueryClient } from "@tanstack/react-query";

import ProductItem from "./ProductItem";
import useProductData from "../hooks/useProductData";
// fetching data from server

const Products = ({ onViewProductDeatils }) => {
  const queryClient = useQueryClient();
  const { isPending, error, data: products } = useProductData();

  // for delete request
  const mutation = useMutation({
    mutationFn: async (deleteId) =>
      await axios.delete(`http://localhost:3000/products/${deleteId}`),
    onSuccess: () => {
      queryClient.invalidateQueries("products", (oldData) =>
        oldData.filter((product) => product.id !== deleteId)
      );
    },
  });

  const handleDeleteProduct = async (id, event) => {
    event.stopPropagation();
    await mutation.mutateAsync(id);
  };
  const handleEditProduct = (id) => {};

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h2 className='text-3xl my-2'>Product List</h2>
      <ul className='grid-cols-1 gap-5 grid md:grid-cols-3 text-black sm:grid-cols-2'>
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            onViewProductDeatils={onViewProductDeatils}
            onDeleteProduct={handleDeleteProduct}
            onEditProduct={handleEditProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
