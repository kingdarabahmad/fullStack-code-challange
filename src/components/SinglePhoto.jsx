import React, { useEffect, useRef } from "react";
import { BiLike } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
const SinglePhoto = ({
  photoUrl,
  instaUserName,
  singleName,
  singleUserName,
  photoLikes,
  downloads,
  tags,
  setIsOpen,
}) => {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div
      ref={myRef}
      className="w-[500px] h-[100vh] absolute top-5 flex justify-center items-center"
    >
      {/* popup */}
      <div className="w-[500px] shadow-md shadow-gray-600  dark:shadow-white relative h-fit border-2 dark:border-none rounded-lg ">
        {/* image section....... */}
        <div className="w-full h-[300px] dark:border-none">
          <img
            className="w-full h-full object-cover rounded-t-lg dark:border-none"
            src={photoUrl}
            alt=""
          />
        </div>
        {/* image detail....... */}
        <div className="flex flex-col dark:bg-[#141414] bg-white rounded-b-lg">
          <div className="flex h-fit py-2 px-3 items-center justify-between">
            {/* userName */}
            <div>
              <h1 className='font-["Montserrat"] dark:text-white font-bold text-xs text-[#4F4F4F]'>
                {singleName}
              </h1>
              <h1 className='font-["Montserrat"] font-semibold text-[10px] text-[#A7A7A7]'>
                @{singleUserName}
              </h1>
            </div>
            {/* socialmedia links */}
            {instaUserName && (
              <div className="flex item-center gap-1">
                <FaInstagram className=" fill-[#4F4F4F] dark:fill-white" />
                <h1 className='font-["Montserrat"] dark:text-white font-bold text-xs text-[#4F4F4F]'>
                  @{instaUserName}
                </h1>
              </div>
            )}
            {/* dowmload section */}
            <div className="flex item-center gap-1">
              <h1 className='font-["Montserrat"] dark:text-white font-bold text-xs text-[#4F4F4F]'>
                {downloads}
              </h1>
              <h1 className='font-["Montserrat"] dark:text-white font-bold text-xs text-[#4F4F4F]'>
                downloads
              </h1>
            </div>
            {/* likes section */}
            <div className="flex gap-1 dark:text-white">
              <BiLike className=" fill-[#4F4F4F] dark:fill-white" />
              <h1 className='font-["Montserrat"] text-[10px] font-bold'>
                {photoLikes}
              </h1>
            </div>
          </div>
          {/* related tags */}
          <h1 className='px-2 font-["Montserrat"] dark:text-white font-bold text-xs text-[#4F4F4F]'>
            Related Tags
          </h1>
          <div className="flex flex-wrap gap-2 p-2">
            {tags?.map((item, i) => (
              <button
                key={i}
                className='w-fit h-fit border-[1px] rounded-sm text-[9px]  p-[4px] font-["Montserrat"] dark:text-white font-bold text-xs text-[#4F4F4F]'
              >
                {item?.title}
              </button>
            ))}
          </div>
        </div>
        {/* delete button */}
        <TiDeleteOutline
          onClick={() => setIsOpen(false)}
          className=" cursor-pointer absolute rounded-full -top-4 -right-4 fill-black dark:bg-black dark:fill-white text-3xl bg-white "
        />
      </div>
    </div>
  );
};

export default SinglePhoto;
