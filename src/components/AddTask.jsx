import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTask(user);
    setUser({ name: "", email: "" });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <h1 className='text-3xl font-semibold pb-3'>Add New Task</h1>
      <form className='flex gap-3' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='write name'
          className='border border-gray-600'
          value={user.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='write email'
          className='border border-gray-600'
          value={user.email}
          onChange={handleChange}
        />
        <button type='submit' className='px-4 border border-gray-700'>
          add task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
