import React, { useState } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import Card from "../../components/Card/Card";

export default function Portofolio() {
  let [image, setImage] = useState(null);
  function getImage(e) {
    let imgSrc = e.target.previousSibling.getAttribute("src");

    setImage(imgSrc);
    show();
  }

  function show() {
    document.querySelector(".layer").classList.remove("hidden");
  }
  function hide() {
    document.querySelector(".layer").classList.add("hidden");
  }
  return (
    <>
      <section className=" pt-24  text-center relative">
        <div
          className="layer bg-blue-600 fixed top-0 right-0 left-0 bottom-0 z-[1000] min-h-screen bg-opacity-30 flex items-center justify-center hidden "
          onClick={hide}
        >
          <div>
            <img
              src={image}
              className="w-[600px]"
              alt=""
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </div>
        </div>
        <h2 className="text-5xl font-bold uppercase text-second py-2 ">
          portfolio component
        </h2>
        <div className="lines flex items-center gap-2  w-fit mx-auto">
          <div className="line "></div>
          <i className="fa-solid fa-star text-second"></i>
          <div className="line"></div>
        </div>
        <div className="container  text-center   ">
          <div className=" flex flex-wrap p-7 gap-5">
            <Card img={port1} event={getImage} />
            <Card img={port2} event={getImage} />
            <Card img={port3} event={getImage} />
            <Card img={port1} event={getImage} />
            <Card img={port2} event={getImage} />
            <Card img={port3} event={getImage} />
          </div>
        </div>
      </section>
    </>
  );
}
