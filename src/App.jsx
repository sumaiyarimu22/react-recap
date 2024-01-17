import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/Tasks/TaskBoard";

const App = () => {
  return (
    <div className='bg-[#191D26] font-[Inter] text-white '>
      <Navbar />
      <Hero />
      <div className='container mx-auto'>
        <TaskBoard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
