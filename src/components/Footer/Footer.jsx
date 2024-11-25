import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-second py-4">
          <div className="container text-center flex flex-wrap flex-col sm:gap-4 gap-12 sm:flex-row py-7">
            <div className="location  text-white sm:w-[30%] ">
              <h3 className="text-3xl font-semibold uppercase">Location</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, Mo 65243</p>
            </div>
            <div className="webs  text-white sm:w-[30%] space-y-2 ">
              <h3 className="text-3xl font-semibold uppercase">
                Around The Web
              </h3>
              <ul className="flex gap-3 mx-auto  w-fit ">
                <li className=" w-8 h-8 flex items-center justify-center border-2 rounded-full ">
                  <a href="">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="w-8 h-8 flex items-center justify-center border-2 rounded-full">
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="w-8 h-8 flex items-center justify-center border-2 rounded-full">
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li className="w-8 h-8 flex items-center justify-center border-2 rounded-full ">
                  <a href="">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="about text-white sm:w-[30%] ">
              <h3 className="text-3xl font-semibold uppercase">
                ABOUT FREELANCER
              </h3>
              <p className="text-sm">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="text-center bg-[#1a252f] text-white py-4">
          Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}
