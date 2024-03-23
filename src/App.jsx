import Featured from "./components/Featured";
import Header from "./components/Navbar/Header";
import TickerWrapper from "./components/TickerWrapper";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";

const App = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header />
      <TickerWrapper />
      <Featured />
      <ContentWrapper />
    </div>
  );
};

export default App;
