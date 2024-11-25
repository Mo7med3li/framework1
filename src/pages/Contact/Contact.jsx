import React from "react";
import "animate.css";

export default function Contact() {
  return (
    <>
      <section className="pt-24  h-screen ">
        <h2 className="text-5xl font-bold uppercase text-second py-2 mx-auto w-fit">
          contact section
        </h2>
        <div className="lines flex items-center gap-2  w-fit mx-auto">
          <div className="line"></div>
          <i className="fa-solid fa-star text-second"></i>
          <div className="line"></div>
        </div>
        <div className=" px-9 py-8 flex items-center justify-center flex-wrap ">
          <form className=" w-1/2 space-y-11">
            <div className=" ">
              <p className="text-primary py-4 hidden name animate__animated animate__fadeInUp ">
                User Name :
              </p>
              <input
                type="text"
                placeholder="UserName"
                className="form-controller  "
                onInput={(e) => {
                  e.target.value
                    ? document.querySelector(".name").classList.remove("hidden")
                    : document.querySelector(".name").classList.add("hidden");
                }}
              />
            </div>
            <div className=" ">
              <p className="text-primary py-4 hidden age animate__animated animate__fadeInUp  ">
                User Age :
              </p>
              <input
                type="text"
                placeholder="UserAge"
                className="form-controller"
                onInput={(e) => {
                  e.target.value
                    ? document.querySelector(".age").classList.remove("hidden")
                    : document.querySelector(".age").classList.add("hidden");
                }}
              />
            </div>
            <div className="">
              <p className="text-primary py-4 hidden email animate__animated animate__fadeInUp ">
                User Email :
              </p>
              <input
                type="email"
                placeholder="UserEmail"
                className="form-controller "
                onInput={(e) => {
                  e.target.value
                    ? document
                        .querySelector(".email")
                        .classList.remove("hidden")
                    : document.querySelector(".email").classList.add("hidden");
                }}
              />
            </div>
            <div className="">
              <p className="text-primary py-4 hidden password animate__animated animate__fadeInUp ">
                User Password :
              </p>
              <input
                type="password"
                placeholder="UserPassword"
                className="form-controller "
                onInput={(e) => {
                  e.target.value
                    ? document
                        .querySelector(".password")
                        .classList.remove("hidden")
                    : document
                        .querySelector(".password")
                        .classList.add("hidden");
                }}
              />
            </div>
            <button
              type="submit"
              className="bg-primary p-2 rounded-lg text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
