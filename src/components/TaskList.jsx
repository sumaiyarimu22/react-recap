/* eslint-disable react/prop-types */
import Item from "./Item";

const TaskList = ({
  tasks,
  loading,
  error,
  handleEditSubmiter,
  editedText,
  setEditedText,
}) => {
  return (
    <div className='flex flex-col gap-3 container mx-auto bg-gray-900 p-10'>
      {loading ? (
        <p className='text-center'>{error ? error : "Loading..."}</p>
      ) : (
        tasks.length === 0 && <p className='text-center'>No task to show</p>
      )}

      {tasks.map((task) => (
        <Item
          task={task}
          key={task.id}
          handleEditSubmiter={handleEditSubmiter}
          editedText={editedText}
          setEditedText={setEditedText}
        />
      ))}
    </div>
  );
};

export default TaskList;
