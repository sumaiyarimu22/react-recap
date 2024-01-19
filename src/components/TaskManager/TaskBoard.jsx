import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";
import TaskAddModal from "./TaskAddModal";

const defaultTask = {
  id: crypto.randomUUID(),
  title: "Learn React Native",
  description:
    "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
  tags: ["web", "react", "js"],
  priority: "High",
  isFavorite: true,
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [updateText, setUpdateText] = useState(null);

  // add a new task and update
  const handleTaskAddAndUpdate = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          } else {
            return task;
          }
        })
      );
    }
    setShowModal(false);
  };

  // edt a task
  const handleTaskEdit = (editTask) => {
    setShowModal(true);
    setUpdateText(editTask);
  };

  // delete a task
  const handleTaskDelete = (deleteId) => {
    const existTask = tasks.filter((task) => task.id !== deleteId);
    setTasks(existTask);
  };

  // is Favorite
  const handleIsFavorite = (favId) => {
    const taskIndex = tasks.findIndex((task) => task.id === favId);

    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks([...newTasks]);
  };

  // Delete all task
  const HandleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleSearch = (searchValue) => {
    const searchTasks = tasks.filter((task) =>
      task.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setTasks(searchTasks);
  };

  return (
    <section className='mb-20' id='tasks'>
      {showModal && (
        <TaskAddModal
          handleTaskAddAndUpdate={handleTaskAddAndUpdate}
          updateText={updateText}
        />
      )}
      <div className='container'>
        <TaskSearch handleSearch={handleSearch} />
        <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
          <TaskAction
            handleAddTaskModal={() => setShowModal(true)}
            HandleDeleteAll={HandleDeleteAll}
          />
          <TaskList
            tasks={tasks}
            handleTaskEdit={handleTaskEdit}
            handleTaskDelete={handleTaskDelete}
            handleIsFavorite={handleIsFavorite}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
