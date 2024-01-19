import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskManager/TaskBoard";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <TaskBoard />
      <Footer />
    </div>
  );
};

export default App;
