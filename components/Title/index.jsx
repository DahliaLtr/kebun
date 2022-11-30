import React from "react";
import Button from "../Buttons";

const Title = ({ page, title, pagetitle, back, link}) => {
  return (
    <>
      <div className="capitalize">
        {
          pagetitle && (
            <div className="text-gray-400 text-base ">{page}</div>
          )
        }
        <div className="flex items-center">
          {back && (
            <Button type="back" link={link}/>
          )}
          <div className="font-semibold pt-4 text-2xl pb-5">{title}</div>
        </div>
        
      </div>
    </>
  );
};

export default Title;
