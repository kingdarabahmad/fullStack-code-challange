import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import ImageList from "../components/ImageList";
import SearchList from "../components/SearchList";
import { useGetPhotoCollectionBySearchQuery } from "../redux/services/apiSlice";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const {isLoading,data}=useGetPhotoCollectionBySearchQuery(inputValue)
  return (
    <div className="w-full">

      {/* top section search images section */}

      <div className='w-full gap-2 flex flex-col justify-center items-center bg-cover h-[300px] bg-no-repeat bg-[url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")]'>
        <h1 className='font-["Montserrat"] font-bold  text-3xl text-white'>
          Download High Quality Images by creators
        </h1>
        <h1 className='font-["Montserrat"] font-medium  text-sm text-[#C4C4C4]'>
          Over 2.4 million+ stock Images by our talented community
        </h1>

        {/* search bar */}

        <div className="w-[800px] h-[54px] bg-white flex items-center p-2 rounded-lg">
          <CiSearch className="w-[30px] text-3xl h-[20px] fill-[#A7A7A7]" />
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className='w-full focus:outline-none px-2 h-full font-["Montserrat"] font-medium  text-sm text-[#C4C4C4]'
            type="text"
            placeholder="Search high resolution Images, categories, wallpapers"
          />
        </div>
      </div>

      {/* bottom section image listing */}
      
      <div>
        {inputValue ? (
          <SearchList searchResult={data?.results} isLoading={isLoading} />
        ) : (
          <ImageList />
        )}
      </div>
    </div>
  );
};

export default HomePage;
