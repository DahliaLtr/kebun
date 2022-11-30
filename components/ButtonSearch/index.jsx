import React from "react";
import { GoSearch } from "react-icons/go";

const ButtonSearch = () => {
  return (
    <div className="w-full h-full flex items-center text-[#D9D9D9] border border-[#D9D9D9]">
      <span className="flex px-2 items-center text-[#D9D9D9] ">
        <GoSearch />
      </span>
      <input type="text" className="bg-[#FFFFFF] focus:outline-none" placeholder="Search" />
    </div>
  );
};

export default ButtonSearch;