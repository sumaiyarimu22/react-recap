import Gadets from "../gadets/gadets";
import Laptop from "../laptops/Laptop";
import Reviews from "../reviews/Reviews";
import LeftContent from "./LeftContent";
import RighteContent from "./RighteContent";

const ContentWrapper = () => {
  return (
    <div className='container lg:flex justify-between gap-5  '>
      <div className='flex flex-col gap-5 w-full lg:w-[calc(100%-320px)]'>
        <div className='box overflow-y-auto '>
          <LeftContent />
        </div>
        <div className='box overflow-y-auto '>
          <Reviews />
        </div>
        <div className='md:flex gap-5'>
          <div className='box overflow-y-auto '>
            <Gadets />
          </div>
          <div className='box overflow-y-auto '>
            <Laptop />
          </div>
        </div>
      </div>
      <div className='lg:w-80 w-full '>
        <RighteContent />
      </div>
    </div>
  );
};

export default ContentWrapper;
