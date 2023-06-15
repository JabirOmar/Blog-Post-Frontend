import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";

export default function Footer() {
  return (
    <>
      <footer className=" bg-[#efefef] py-[40px] px-[4%]">
        <p className=" font-semibold text-2xl">Subscribe to newsletter</p>
        <div className=" flex items-center mt-2 gap-5 mb-2">
          <input className=" footer_email_input w-[65%] py-2 px-3 rounded-md border border-gray-400 bg-transparent" />
          <button className=" footer_email_submit bg-orange-400 w-[35%] py-2 rounded-md text-white hover:bg-white hover:text-orange-400">
            Subscribe
          </button>
        </div>
      </footer>

      <div className=" under_footer flex items-center justify-center gap-5 mt-[50px]">
        <GrFacebookOption />
        <BsTwitter />
        <BsInstagram />
      </div>

      <p className=" text-gray-400 text-center mt-6">
        Copyright ©2023 All rights reserved <br />{" "}
        <span className=" font-semibold">SRB-RB News Blog</span>
      </p>
    </>
  );
}
