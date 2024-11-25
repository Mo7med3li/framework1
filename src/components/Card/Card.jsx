import React from "react";

export default function Card({ img, event }) {
  return (
    <>
      <div
        className="card w-full md:w-[48%] lg:w-[31%] relative rounded-lg overflow-hidden "
        onClick={(e) => {}}
      >
        <img src={img} className="w-full" alt="" />
        <div
          className="card-layer bg-primary absolute top-0 bottom-0 left-0 right-0  opacity-0 items-center justify-center text-white text-6xl  hover:opacity-80 flex  transition-opacity duration-500"
          onClick={(e) => {
            event(e);
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </>
  );
}
