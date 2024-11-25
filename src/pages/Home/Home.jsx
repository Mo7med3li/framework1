import React from "react";
import avatar from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-primary flex items-center justify-center  pt-10">
        <div className="start text-center text-white space-y-6">
          <img src={avatar} className="w-[250px] mx-auto" alt="" />
          <h2 className="text-5xl font-bold">start Framework</h2>
          <div className="lines flex items-center gap-2  w-fit mx-auto">
            <div className="line  bg-white"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="line line  bg-white"></div>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
