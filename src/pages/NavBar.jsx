import React from "react";
import "../assets/landing-page.css";
import {
  AiOutlineInstagram,
  AiOutlineLogin,
  AiOutlineTwitter,
} from "react-icons/ai";

import { GrFacebookOption } from "react-icons/gr";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

// import { CiLogin } from "react-icons/gr";

const NavBar = () => {
  let navigate = useNavigate();
  return (
    <nav
      className=" landing_page_nav w-full grid grid-flow-col gap-2 items-center py-5 px-[3%] border-b border-gray-300 "
      onClick={() => {
        navigate("/");
      }}
    >
      {/* Left */}
      <section className=" left_content relative ">
        <BiSearchAlt2 className=" absolute text-gray-400 top-[50%] translate-y-[-50%] text-lg left-2 z-0" />
        <input
          className=" relative w-[100%] border border-gray-400 rounded-xl bg-transparent p-2 pl-7 z-10 "
          placeholder="Serach..."
        />
      </section>

      {/* Middle */}
      <section className=" mid_content text-center">
        <span className=" text-xl font-semibold">SRS-RB</span>
      </section>

      {/* Right */}
      <section className=" right_content flex items-center justify-between px-[4%]">
        <div className=" flex gap-2">
          <AiOutlineTwitter className=" box-content p-2 hover:bg-white rounded-md cursor-pointer" />
          <GrFacebookOption className=" box-content p-2 hover:bg-white rounded-md cursor-pointer" />
          <AiOutlineInstagram className=" box-content p-2 hover:bg-white rounded-md cursor-pointer" />
        </div>

        <div className=" flex">
          <span className=" text-lg border border-transparent px-4 py-2 cursor-pointer hover:border-gray-300 rounded-md ">
            Login
          </span>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
