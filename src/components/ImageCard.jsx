import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import SinglePhoto from "./SinglePhoto";
import { useGetSinglePhotoQuery } from "../redux/services/apiSlice";

const ImageCard = ({ imageUrl, likes, imageId, name, userName }) => {
  const {data} = useGetSinglePhotoQuery(imageId);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className=" cursor-pointer flex flex-col w-[250px] h-[300px] border-[1px] dark:border-none dark:rounded-lg border-gray-300 rounded-lg"
      >

        {/* image part */}

        <div className="w-full h-[75%]">
          <img
            className="w-full h-full rounded-t-lg object-cover"
            src={imageUrl}
            alt={`image-${imageId}`}
          />
        </div>

        {/* image text */}

        <div className="flex h-[25%] py-2 px-3 items-center rounded-b-lg justify-between dark:bg-[#141414]">
          {/* userName */}
          <div>
            <h1 className='font-["Montserrat"] dark:text-white font-bold text-xs text-[#4F4F4F]'>
              {name}
            </h1>
            <h1 className='font-["Montserrat"] font-semibold text-[10px] text-[#A7A7A7]'>
              @{userName}
            </h1>
          </div>
          {/* likes section */}
          <div className="flex gap-1 dark:text-white">
            <BiLike className=" fill-[#4F4F4F] dark:fill-white" />
            <h1 className='font-["Montserrat"] text-[10px] font-bold'>
              {likes}
            </h1>
          </div>
        </div>
      </div>
      
      {/* based on isOpen value SinglePhoto rendered */}

      {isOpen ? (
        <SinglePhoto
          photoUrl={data?.urls?.regular}
          singleName={data?.user?.name}
          singleUserName={data?.user.username}
          instaUserName={data?.user?.instagram_username}
          downloads={data?.downloads}
          photoLikes={data?.likes}
          tags={data?.tags}
          setIsOpen={setIsOpen}
        />
      ) : null}
    </>
  );
};

export default ImageCard;
