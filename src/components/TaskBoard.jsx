import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import EditTask from "./EditTask";
import axios from "axios";
const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTAsk] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/data`);
        if (response && response.data) {
          setTasks(response.data);
        }
      } catch (error) {
        if (error.response) {
          setError(
            `Error from server : status : ${error.response.status} - message: ${error.response.data}`
          );
        } else {
          setError(error.message);
        }
      }
    };
    fetchUsers();
  }, []);

  const handleAddTask = async (newTask) => {
    try {
      let id = tasks.length
        ? String(Number(tasks[tasks.length - 1].id) + 1)
        : 1;
      const finalPost = {
        id,
        ...newTask,
      };

      const response = await axios.post(
        `http://localhost:8000/data`,
        finalPost
      );

      setTasks([...tasks, response.data]);
    } catch (error) {
      if (error.response) {
        setError(
          `Error from server : status : ${error.response.status} - message: ${error.response.data}`
        );
      } else {
        setError(error.message);
      }
    }
  };

  const handleDeleteTask = async (deleteId) => {
    if (confirm("Are you sure you went to delete the post")) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/data/${deleteId}`
        );

        const filtered = tasks.filter((task) => task.id !== response.data.id);
        setTasks(filtered);
      } catch (error) {
        if (error.response) {
          setError(
            `Error from server : status : ${error.response.status} - message: ${error.response.data}`
          );
        } else {
          setError(error.message);
        }
      }
    }
  };

  const handleEdit = (updateTask) => {
    setEditTAsk(updateTask);
  };

  const handleEditTask = async (updateTask) => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/data/${updateTask.id}`,
        updateTask
      );
      let updateUser = tasks.map((task) => {
        if (task.id === response.data.id) {
          return response.data;
        } else {
          return task;
        }
      });
      setTasks(updateUser);
    } catch (error) {
      if (error.response) {
        setError(
          `Error from server : status : ${error.response.status} - message: ${error.response.data}`
        );
      } else {
        setError(error.message);
      }
    }
    setEditTAsk(null);
  };
  return (
    <div className='m-20 space-y-5'>
      <h1 className='text-4xl font-bold'>TaskList</h1>
      <ul className='border border-gray-500 p-5 w-[35rem]'>
        {tasks?.map((task) => (
          <Task
            key={task.id}
            task={task}
            onTaskDelete={handleDeleteTask}
            onTaskEdit={handleEdit}
          />
        ))}
      </ul>
      {editTask ? (
        <EditTask onEditTask={handleEditTask} editTask={editTask} />
      ) : (
        <AddTask onAddTask={handleAddTask} />
      )}
    </div>
  );
};

export default TaskBoard;
