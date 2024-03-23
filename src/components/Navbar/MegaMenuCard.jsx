const MegaMenuCard = ({ subItem }) => {
  const { title, image, category, date } = subItem;
  return (
    <div className='flex flex-col  gap-2'>
      <div className='relative'>
        <img src={image} alt={title} />
        <p className='absolute left-0 bottom-0 z-[2] rounded text-white bg-[#fd3a13] text-[10px] font-medium uppercase py-1 px-[7px]'>
          {category}
        </p>
      </div>
      <p className=' color-[#16161A] text-[14px] font-medium hover:text-[#fd3a13] duration-300 ease-in'>
        {title}
      </p>
      <p className='font-thin text-[#97979D] text-[12px]'>{date}</p>
    </div>
  );
};

export default MegaMenuCard;
