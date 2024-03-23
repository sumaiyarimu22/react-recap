import React from "react";
import TitleWrap from "../TitleWrap";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import PopularPosts from "../PopularPosts";
import Travles from "../Travles";

const RighteContent = () => {
  return (
    <div className='space-y-5'>
      <div className='box'>
        <TitleWrap title={"FOLLOW US"} />
        <div className='grid grid-cols-2 gap-2'>
          <div className='bg-[#3b5999] flex justify-between gap-5 items-center px-2 py-1 text-white'>
            <FaFacebook className=' text-xl ' />
            <p>Facebook</p>
          </div>
          <div className='bg-black flex justify-between gap-5 items-center px-2 py-1 text-white'>
            <RiTwitterXLine className=' text-xl ' />
            <p>Twitter</p>
          </div>
          <div className='bg-[#F50000] flex justify-between gap-5 items-center px-2 py-1 text-white'>
            <FaYoutube className=' text-xl text-red ' />
            <p>YouTube</p>
          </div>
          <div className='insta flex justify-between gap-5 items-center px-2 py-1 text-white'>
            <FaInstagram className=' text-xl ' />
            <p>Instragram</p>
          </div>
        </div>
      </div>

      <div className='box'>
        <PopularPosts />
      </div>
      <div className='box'>
        <Travles />
      </div>
    </div>
  );
};

export default RighteContent;
