import reviewData from "../../data/reviewData";
import TitleWrap from "../TitleWrap";
import MegaMenuCard from "../Navbar/MegaMenuCard";

const Reviews = () => {
  return (
    <div className='container flex flex-col justify-between  '>
      <TitleWrap title='REVIEWS' />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
        {reviewData.map((rivew) => (
          <MegaMenuCard key={rivew.title} subItem={rivew} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
