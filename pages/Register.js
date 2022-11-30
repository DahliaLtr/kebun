import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import NextLink from "next/link";
import Image from "next/image";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const pressShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* container */}
      <div className="bg-cover bg-image bg-center block h-screen items-center justify-center p-4 md:flex">
        {/* login card */}
        <div className="bg-[#FFFFFF] opacity-75 flex flex-col items-center max-w-screen-lg overflow-hidden rounded-2xl shadow-lg text-black font-serif md:flex-row">
          {/* form */}
          <div className="p-11 space-y-8 flex flex-col items-center">
            <div className="flex  items-center">
              <Image src="/logo_hortus.svg" width={100} height={100} alt="Logo" />
              <div>
                <span className="text-xs font-bold text-[#064635]">gardening & plants</span>
                <br />
                <strong className="text-6xl font-light text-[#064635]">HORTUS</strong>
              </div>
            </div>
            {/* inputs */}
            <form className="flex flex-col items-center space-y-4">
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-6 text-black">
                  <FaUser />
                </span>
                <input className="bg-[#FFFFFF] outline-none border border-[#064635]  placeholder-[#99A7B5] pl-20 pr-4 py-3 w-96 rounded-2xl transition" placeholder="Masukkan Username" type="text" />
              </div>
              <div className="relative">
                <span className="absolute flex inset-y-0 items-center pl-6 text-black">
                  <FaLock />
                </span>
                <input className="bg-[#FFFFFF] outline-none border border-[#064635] placeholder-[#99A7B5] w-96 pl-20 pr-4 py-3 rounded-2xl transition" placeholder="Masukkan Password" type={showPassword ? "text" : "password"} />
                <span onClick={(e) => pressShow(e)} className="absolute text-2xl right-2 bottom-3 text-black">
                  {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </span>
              </div>
              <Link href="/Dashboar">
                <button className="bg-[#064635] font-medium w-96 items-center px-3 py-3 rounded-2xl shadow-md text-white transition" type="submit">
                  Login
                </button>
              </Link>
            </form>

            {/* links */}
            <div className="=flex flex-col items-center">
              <p className="text-center">
                Dengan ini, saya menyetujui <br />
                <NextLink href="/">
                  <a className="ml-1 font-bold text-[#064635]">Syarat dan Ketentuan </a>
                </NextLink>
                serta
                <NextLink href="/">
                  <a className="ml-1 font-bold text-[#064635]">Kebijakan Privasi </a>
                </NextLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
