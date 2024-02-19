const Task = ({ task, onTaskDelete, onTaskEdit }) => {
  return (
    <li className='flex gap-5'>
      <span>Name: {task.name}</span>
      <span>Email : {task.email}</span>

      <button onClick={() => onTaskDelete(task.id)}>❌</button>
      <button onClick={() => onTaskEdit(task)}>🖌</button>
    </li>
  );
};

export default Task;
