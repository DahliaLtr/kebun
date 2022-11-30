import Link from "next/link";
import React from "react";
import { ImEye } from "react-icons/im";
import { TfiPlus } from "react-icons/tfi";
import { MdEdit, MdDelete, MdBlock, MdCheck, MdOutlineAccessTimeFilled } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { AiOutlinePrinter } from "react-icons/ai";
import { BiLike, BiArrowBack, BiListCheck } from "react-icons/bi";

const Button = ({ link, handleClik, text, icon, type, bground, style }) => {
  switch (type) {
    case "lightgreen":
      bground = "bg-[#48BB78] rounded-md py-0.5 px-2.5 justify-center text-white capitalize";
      break;
    case "red":
      bground = "bg-[#FF0000] rounded-md py-0.5 px-2.5 justify-center text-white capitalize";
      break;
    case "gray":
      bground = "bg-[#99A7B5] rounded-md py-0.5 px-2.5 justify-center text-white capitalize";
      break;
    case "blue":
      bground = "bg-[#387EDC] rounded-md py-1 px-3 justify-center text-white capitalize";
      break;
    case "blue+print":
      bground = "bg-[#387EDC] rounded-md py-1 px-2 justify-center text-white capitalize";
      icon = <AiOutlinePrinter className="fill-[#FFFFFF] w-5 h-5 ml-2" />;
      break;
    case "yellow":
      bground = "bg-[#FDD137] rounded-md py-1 px-3 justify-center text-white capitalize";
      break;
    case "greendark":
      bground = "bg-[#064635] rounded-md py-1 px-3 justify-center text-white capitalize";
      break;
    case "eye":
      bground = "bg-[#FFFFFF] border border-[#B6B6B6] hover:border-[#465AC7] rounded-md p-0.5 justify-center";
      icon = <ImEye className=" fill-[#B6B6B6] w-6 h-6" />;
      break;
    case "edit":
      bground = "bg-[#FFFFFF] border border-[#B6B6B6] hover:border-[#D9D9D9] rounded-md p-0.5 justify-center";
      icon = <MdEdit className=" fill-[#B6B6B6] w-6 h-6" />;
      break;
    case "delete":
      bground = "bg-[#FFFFFF] border border-[#B6B6B6] hover:border-[#FF0000] rounded-md p-0.5 justify-center";
      icon = <MdDelete className=" fill-[#FF0000] w-6 h-6" />;
      break;
    case "check":
      bground = "bg-[#064635] hover:bg-[#0D9488] border border-[#D9D9D9] hover:border-[#75D6FF] rounded-md p-0.5 justify-center";
      icon = <MdCheck className=" fill-[#FFFFFF] w-6 h-6" />;
      break;
    case "calendar":
      bground = "bg-[#FFFFFF] border-none rounded-md p-0.5 justify-center";
      icon = <CiCalendar className="fill-[#000000] w-10 h-10" />;
      break;
    case "time":
      bground = "bg-[#FFFFFF] border-none rounded-md p-0.5 justify-center";
      icon = <MdOutlineAccessTimeFilled className="fill-[#000000] w-8 h-8" />;
      break;
    case "add":
      bground = "px-2 py-2 bg-[#064635] rounded justify-center";
      icon = <TfiPlus className=" fill-[#FFFFFF] w-6 h-6" />;
      break;
    case "back":
      bground = "p-2 bg-[#FFFFFF] border-none justify-center";
      icon = <BiArrowBack className=" fill-[#064635] w-8 h-8" />;
      break;
    case "like":
      bground = "bg-[#FFFFFF] border border-[#B6B6B6] hover:border-[#387EDC] rounded-md p-0.5 justify-center";
      icon = <BiLike className=" fill-[#387EDC] w-6 h-6" />;
      break;
    case "block":
      bground = "bg-[#FFFFFF] border border-[#B6B6B6] hover:border-[#FF0000] rounded-md p-0.5 justify-center";
      icon = <MdBlock className=" fill-[#FF0000] w-6 h-6" />;
      break;
    case "checklist":
      bground = "bg-[#FFFFFF] rounded-md p-0.5 justify-center";
      icon = <BiListCheck className=" fill-[#B6B6B6] w-10 h-10"/>
      break;
    default:
      bground = "bg-white border border-2";
      break;
  }
  return (
    <Link href={link || ""}>
      <a>
        <button type={type} className={`inline-flex justify-center items-center ${bground} ${style}`} onClick={handleClik}>
          {text} {icon}
        </button>
      </a>
    </Link>
  );
};

export default Button;
