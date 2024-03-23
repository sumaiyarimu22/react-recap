import logo from "../../assets/logo.png";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import NavItem from "./NavItem";
import navData from "../../data/navbarData";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className='bg-white shadow-sm '
      // style='box-shadow: ;'
    >
      <div className='container relative h-[70px] px-5 lg:px-0'>
        <div className='flex justify-between items-center gap-10 h-full '>
          <div className='flex items-center justify-center gap-5'>
            <div className='lg:hidden flex items-center '>
              {showMenu ? (
                <RxCross2
                  className='text-3xl'
                  onClick={() => setShowMenu(false)}
                />
              ) : (
                <IoMenuOutline
                  className='text-3xl'
                  onClick={() => setShowMenu(true)}
                />
              )}
            </div>
            <div
              className={`flex  gap-5 ${
                showMenu
                  ? "fixed top-10 left-0 flex-col duration-300 ease-in h-screen z-[1000000] bg-white p-10 justify-start items-start"
                  : "justify-center items-center"
              }`}
            >
              <img src={logo} alt='' className='max-h-[40px]' />
              <ul
                className={`lg:flex text-[#16161A] text-[14px] font-bold uppercase h-[62px]  ${
                  showMenu ? "block space-y-5" : "hidden"
                }`}
              >
                {navData.map((item, index) => (
                  <NavItem key={index} item={item} />
                ))}
              </ul>
            </div>
          </div>
          <div className=' flex gap-5 items-center'>
            <IoSunnyOutline className='hover:text-[#fd3a13] ease-in duration-100 text-lg' />
            <div className='text-2xl text-[#16161A] font-bold hover:text-[#fd3a13] ease-in duration-100'>
              <IoIosSearch />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
