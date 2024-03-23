import reviewData from "../data/reviewData";
import MegaMenuCard from "./Navbar/MegaMenuCard";
import TitleWrap from "./TitleWrap";

const Travles = () => {
  return (
    <div className='container flex flex-col justify-between  '>
      <TitleWrap
        title='TRAVEL
'
      />
      <div className='grid grid-cols-2 gap-5'>
        {reviewData.map((rivew) => (
          <MegaMenuCard key={rivew.title} subItem={rivew} />
        ))}
      </div>
    </div>
  );
};

export default Travles;
