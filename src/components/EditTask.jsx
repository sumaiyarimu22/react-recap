import { useState } from "react";

const EditTask = ({ editTask, onEditTask }) => {
  const [updateUser, setUpdateUser] = useState(editTask);
  console.log(updateUser);
  const handleChange = (e) => {
    let name = e.target.name;
    const value = e.target.value;
    setUpdateUser({
      ...updateUser,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditTask(updateUser);
    setUpdateUser({
      email: "",
      name: "",
    });
  };
  return (
    <div>
      <h1 className='text-3xl font-semibold pb-3'>Edit TAsk Task</h1>
      <form className='flex gap-3' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='write name'
          className='border border-gray-600'
          value={updateUser.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='write email'
          className='border border-gray-600'
          value={updateUser.email}
          onChange={handleChange}
        />
        <button type='submit' className='px-4 border border-gray-700'>
          Update task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
