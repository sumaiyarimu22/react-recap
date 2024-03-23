import { FaAngleRight } from "react-icons/fa";
import useHover from "../../hook/useHover";

const FeaturesSubItem = ({ item }) => {
  const { label, subItems } = item;
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <li
      className='flex items-center gap-1 relative justify-between '
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className='nav-item'>{label}</p>
      {subItems && subItems.length > 0 && <FaAngleRight />}
      {isHovered && subItems && subItems.length > 0 && (
        <ul className='sub-menu-2'>
          {subItems.map((subItem, index) => (
            <FeaturesSubItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FeaturesSubItem;
