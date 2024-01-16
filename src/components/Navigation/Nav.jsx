import "./Nav.css";

import { FiHeart } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

const Navbar = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className='nav-container'>
        <input
          type='text'
          placeholder='Enter your search shoes'
          className='search-input'
        />
      </div>

      <div className='profile-container'>
        <a href='/'>
          <FiHeart className='nav-icons' />
        </a>
        <a href='/'>
          <FaShoppingCart className='nav-icons' />
        </a>
        <a href='/'>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
