import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-second py-7 fixed right-0 left-0 z-50">
        <div className="container flex justify-between items-center flex-wrap px-4">
          <h1>
            <Link to="/" className="text-white text-4xl font-bold">
              Start FrameWork
            </Link>
          </h1>
          <ul className=" md:flex hidden gap-6 order-1 md:w-fit w-full text-white font-semibold text-lg links">
            <li>
              <NavLink
                to="about"
                className={({ isActive }) => {
                  return `p-2 rounded-lg ${isActive ? "bg-primary" : ""}`;
                }}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `p-2 rounded-lg ${isActive ? "bg-primary" : ""}`;
                }}
                to="/portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return `p-2 rounded-lg ${isActive ? "bg-primary" : ""}`;
                }}
                to="contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="menu md:hidden border-4 p-2 rounded-md border-black cursor-pointer">
            <i
              className="fa-solid fa-bars text-2xl  "
              onClick={() => {
                document.querySelector(".links").classList.toggle("hidden");
              }}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}
