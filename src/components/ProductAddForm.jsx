import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const ProductAddForm = () => {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post("http://localhost:3000/products", newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  const handleChange = (e) => {
    let name = e.target.name;
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;
    setState({ ...state, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    const newData = { ...state, id: crypto.randomUUID() };
    mutation.mutate(newData);
  };
  return (
    <div className='m-2 p-2 bg-gray-100 my-20 fixed top-20'>
      <h2 className='text-2xl my-2 text-black'>Add a Product</h2>
      {mutation.isSuccess && <p>Product Added!</p>}
      <form className='flex flex-col text-black' onSubmit={submitData}>
        <input
          type='text'
          value={state.title}
          name='title'
          onChange={handleChange}
          className='my-2 border p-2 rounded'
          placeholder='Enter a product title'
        />
        <textarea
          value={state.description}
          name='description'
          onChange={handleChange}
          className='my-2 border p-2 rounded'
          placeholder='Enter a product description'
        />

        <input
          type='number'
          value={state.price}
          name='price'
          onChange={handleChange}
          className='my-2 border p-2 rounded'
          placeholder='Enter a product price'
        />
        <input
          type='text'
          value={state.thumbnail}
          name='thumbnail'
          onChange={handleChange}
          className='my-2 border p-2 rounded'
          placeholder='Enter a product thumbnail URL'
        />

        <button
          type='submit'
          className='bg-black m-auto text-white text-xl px-6 py-1 rounded-md'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductAddForm;
