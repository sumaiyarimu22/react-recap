import MegaMenuCard from "./MegaMenuCard";

const MegaMenu = ({ subItems }) => {
  return (
    <div className='mega-menu '>
      {subItems.map((subItem, index) => (
        <MegaMenuCard key={index} subItem={subItem} />
      ))}
    </div>
  );
};

export default MegaMenu;
