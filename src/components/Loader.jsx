import React from "react";

const Loader = () => {
  return (
    <div className="h-[33vh] mx-auto flex justify-center flex-col dark:bg-[#232323]">
      {/* loading text */}
      <div>
        <h1 className='font-["Montserrat"] font-bold text-[12px] text-center text-[#A7A7A7]'>
          Loading some Awesome Images...
        </h1>
      </div>
    </div>
  );
};

export default Loader;
