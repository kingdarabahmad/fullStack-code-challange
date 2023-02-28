import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Navbar = ({ mode, setMode }) => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[100px] px-16 items-center justify-between gap-4">
      {/* image gallery logo div */}
      <div>
        <h1
          onClick={() => navigate("/")}
          className=' cursor-pointer font-["Pattaya"] font-medium text-3xl dark:text-white'
        >
          Image Gallery
        </h1>
      </div>
      {/* search bar div */}
      <div className="w-[350px] h-[40px] border-[1px] dark:border-none rounded-md bg-[#FAFAFA] dark:bg-[#4F4F4F] flex items-center p-2">
        <CiSearch className="w-[20px] h-[20px] fill-[#A7A7A7]" />
        <input
          className='w-full bg-[#FAFAFA] dark:bg-[#4F4F4F] focus:outline-none px-2 h-full font-["Montserrat"] font-medium  text-[12px] text-[#C4C4C4]'
          type="text"
          placeholder="Search Images Here"
        />
      </div>
      {/* navbar items divs */}
      <div className="flex text-sm font-bold font-[Montserrat] gap-4 cursor-pointer dark:text-white">
        <h1>Explore</h1>
        <h1>Collection</h1>
        <h1>Community</h1>
      </div>
      {/* dark mode div */}
      <div className="flex items-center gap-2 dark:text-white">
        <h1 className="text-sm font-bold font-[Montserrat]">
          {mode ? "LightMode" : "DarkMode"}
        </h1>
        <div className="text-2xl cursor-pointer">
          {mode ? (
            <BsToggleOff onClick={() => setMode(false)} />
          ) : (
            <BsToggleOn onClick={() => setMode(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
