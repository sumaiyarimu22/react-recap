import { createContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { fetchingData } from "./utils/fetchData";
import { deleteData } from "./utils/deleteData";
import { puutingRequest } from "./utils/updateData";

export const DeleteContext = createContext();
export const EditContext = createContext();

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editedText, setEditedText] = useState("");
  const [toggleEditMode, setToggleEditMode] = useState(true);

  useEffect(() => {
    //geeting data from the server
    fetchingData(setTasks, setLoading, setError);
  }, []);

  //delete event
  const handleDelete = (id) => {
    //delete data
    deleteData(id);
    //set updated task
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //editing event
  const handleEdit = (id) => {
    //set a terget el
    const [editableTarget] = tasks.filter((task) => task.id === id);
    editableTarget.isEditable = true;
    setEditedText(editableTarget.text);

    setTasks([...tasks]);
    setToggleEditMode(false);

    //re-arange
    tasks
      .filter((task) => task.id !== id)
      .map((targetedEl) => (targetedEl.isEditable = false));
  };

  /* editing task form handle */

  const handleEditSubmiter = (e, id) => {
    e.preventDefault();
    setToggleEditMode(!toggleEditMode);

    const editPersistance = {
      text: editedText,
      id: id,
    };

    //put request
    puutingRequest(id, editPersistance);

    //real time update
    const [editableTarget] = tasks.filter((task) => task.id === id);
    editableTarget.isEditable = false;
    editableTarget.text = editPersistance.text;
    setTasks([...tasks]);
  };

  return (
    <div className='Wrapper bg-teal-900 bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen text-xl text-gray-100 flex flex-col py-10'>
      <DeleteContext.Provider value={handleDelete}>
        <EditContext.Provider value={handleEdit}>
          <Header />
          <AddTask tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            error={error}
            loading={loading}
            handleEditSubmiter={handleEditSubmiter}
            editedText={editedText}
            setEditedText={setEditedText}
          />
          <Footer />
        </EditContext.Provider>
      </DeleteContext.Provider>
    </div>
  );
};

export default App;
