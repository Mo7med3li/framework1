import React from "react";

export default function About() {
  return (
    <>
      <div className="h-screen bg-primary flex items-center justify-center  pt-24">
        <div className="start text-center text-white space-y-1">
          <h2 className="text-5xl font-bold uppercase">about component</h2>
          <div className="lines flex items-center gap-2  w-fit mx-auto">
            <div className="line  bg-white"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="line  bg-white"></div>
          </div>
          <div className="container flex gap-7 text-start flex-col p-8 md:flex-row">
            <div className="about-info px-9">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="about-info px-9 ">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
