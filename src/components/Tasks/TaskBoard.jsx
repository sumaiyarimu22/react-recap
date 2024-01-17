import { useState } from "react";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskSearch from "./TaskSearch";
import TaskAddModal from "./TaskAddModal";
import NoTask from "./NoTask";

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

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  };

  const handleEdit = (editText) => {
    console.log(editText);
    setUpdateText(editText);
    setShowModal(true);
  };

  const handleDelete = (deleteId) => {
    const filterData = tasks.filter((task) => task.id !== deleteId);
    setTasks(filterData);
  };

  const handleDeleteAll = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handlerSearch = (query) => {
    const filteredTask = tasks.filter((task) =>
      task.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setTasks(filteredTask);
  };

  const handleFavorite = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <section className='mb-20' id='tasks'>
      {showModal && (
        <TaskAddModal handleAddTask={handleAddTask} updateText={updateText} />
      )}
      <div className='container'>
        <TaskSearch handlerSearch={handlerSearch} />
        <div className='rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16'>
          <TaskAction
            handleOpenModal={() => setShowModal(true)}
            showModal={showModal}
            handleDeleteAll={handleDeleteAll}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
            />
          ) : (
            <NoTask />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
