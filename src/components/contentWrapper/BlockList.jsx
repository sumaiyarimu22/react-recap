import blockList from "../../data/blockListData";

const BlockList = () => {
  return blockList.map((item, index) => (
    <div key={index} className='  flex gap-3'>
      <div className='blockList h-[65px] w-24  overflow-hidden '>
        <img
          src={item.image}
          alt=''
          className='object-cover w-full h-full block-img duration-300 ease-in'
        />
      </div>
      <div className='entry-header'>
        <h2 className='block-entry-title'>{item.title}</h2>
        <div className='entry-meta'>{item.date}</div>
      </div>
    </div>
  ));
};

export default BlockList;
