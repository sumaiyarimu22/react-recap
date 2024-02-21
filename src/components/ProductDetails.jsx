import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retieveProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = ({ id }) => {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retieveProducts,
  });

  if (isLoading) return <div>Fetching Product Details...</div>;
  if (error) return <div>An Error Occured: {error.message}</div>;
  console.log(error);
  const { title, description, price, rating, thumbnail } = product;
  return (
    <div className='max-w-xs rounded fixed top-20 shadow-lg'>
      <img className='w-full h-60 object-cover' src={thumbnail} alt={title} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{title}</div>
        <p className='text-gray-400 text-base'>{description}</p>
      </div>
      <div className='px-6 py-4'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          ${price}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          Rating: {rating}
        </span>
      </div>
    </div>
  );
};

export default ProductDetails;
