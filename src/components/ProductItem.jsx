import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ProductItem = ({
  product,
  onViewProductDeatils,
  onDeleteProduct,
  onEditProduct,
}) => {
  return (
    <div
      className='bg-white rounded-lg shadow-md flex flex-col justify-between'
      onClick={() => onViewProductDeatils(product.id)}
    >
      <img
        className='w-full h-48 object-cover object-center'
        src={product.thumbnail}
        alt={product.title}
      />
      <div className='p-6'>
        <h2 className='text-gray-800 text-lg font-semibold mb-2 truncate'>
          {product.title}
        </h2>

        <div className='flex justify-between items-center mt-4'>
          <button
            onClick={(event) => onDeleteProduct(product.id, event)}
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            <MdDelete />
          </button>
          <button
            onClick={() => onEditProduct(product.id)}
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            <FaRegEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
