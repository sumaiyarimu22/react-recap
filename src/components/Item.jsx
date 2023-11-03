/* eslint-disable react/prop-types */
import { useContext } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { DeleteContext, EditContext } from "../App";

const Item = ({ task, handleEditSubmiter, editedText, setEditedText }) => {
  const { text, id } = task;
  const handleDelete = useContext(DeleteContext);
  const handleEdit = useContext(EditContext);

  return (
    <div className='flex items-center bg-gradient-to-r from-gray-800 to-slate-800 justify-between p-5 rounded hover:from-teal-900 hover:to-gray-800 group'>
      <div className='flex gap-3'>
        <span>
          <input type='checkbox' className='accent-teal-400 cursor-pointer' />
        </span>

        {task.isEditable && (
          <form onSubmit={(e) => handleEditSubmiter(e, id)}>
            <input
              className='bg-transparent outline-none border-b-2 border-gray-600 pb-1 focus:border-teal-500'
              type='text'
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}

        {!task.isEditable && (
          <p className='group-hover:text-teal-400'>{text}</p>
        )}
      </div>
      <div className='flex gap-3 text-gray-500'>
        <button onClick={() => handleEdit(id)}>
          <FiEdit className='hover:text-teal-400 duration-300 cursor-pointer' />
        </button>
        <button onClick={() => handleDelete(id)}>
          <FiTrash className='hover:text-rose-500 duration-300 cursor-pointer' />
        </button>
      </div>
    </div>
  );
};

export default Item;
