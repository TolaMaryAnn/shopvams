import React from "react";

import mainbg from "../assets/mainbg.jpg";

function Hero() {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-black to-transparent flex flex-col justify-center md:block hidden "
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div className="px-4 md:px-16 lg:px-32 py-12 lg:py-20">
          <div className="text-center">
            <p className="text-9xl ">
              <span className="text-gray-600"> Welcome to</span>{" "}
              <span className="font-sans text-gray-200">shopvams</span>
            </p>
            <div className="text-white text-xl mt-4">
              Shop for men accessories
            </div>
          </div>
          <div />
        </div>
      </div>

      <div
        className="md:hidden"
        style={{
          backgroundImage: `url(${mainbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100px",
        }}
      >
        <div className="px-4 md:px-16 lg:px-32 py-6 text-center ">
          <div className="text-center">
            <p className="text-2xl  ">
              <span className="text-gray-600"> Welcome to</span>{" "}
              <span className="font-sans text-gray-200">shopvams</span>
            </p>
            <div className="text-white text-sm ">
              Shop for men accessories
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Hero;
