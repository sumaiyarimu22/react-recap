import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import FeaturesSubItem from "./FeaturesSubItem";
import MegaMenu from "./MegaMenu";
import useHover from "../../hook/useHover";

const NavItem = ({ item }) => {
  const { label, subItems } = item;
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <li
      className={`flex items-center gap-1 ${
        label === "Features" && "relative"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className='nav-item'>{label}</p>
      <div className={`lg:block ${label === "Mega Menu" ? "hidden" : ""}`}>
        {subItems && subItems.length > 0 && <IoIosArrowDown />}
      </div>
      {isHovered && subItems && subItems.length > 0 && label === "Features" && (
        <ul className='sub-menu'>
          {subItems.map((subItem, index) => (
            <FeaturesSubItem key={index} item={subItem} />
          ))}
        </ul>
      )}
      {isHovered &&
        subItems &&
        subItems.length > 0 &&
        isHovered &&
        label === "Mega Menu" && (
          <div className='hidden lg:block'>
            <MegaMenu subItems={subItems} />
          </div>
        )}
    </li>
  );
};

export default NavItem;
