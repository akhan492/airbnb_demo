import React from "react";
import { BiSearch, BiGlobe, BiUserCircle, BiMenu } from "react-icons/bi";

export default function Header() {
  return (
    <header className="sticky h-20 top-0 z-50 grid grid-cols-3 bg-white shadow-md md:px-10 items-center">
      {/* left side */}
      <div className="relative flex items-center my-auto">
        <img
          className="h-10"
          src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo.png"
          alt="logo"
          // objectFit="contain"
          // objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="pl-5 outline-none bg-transparent grow"
          type="text"
          placeholder="Search Here"
        />
        <BiSearch
          className="hidden md:inline-flex flex-end md:mx-2 h-6 w-6
         bg-red-400 rounded-full p-1 curser-pointer"
        />
      </div>
      {/* right side */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 ">
        <p className="hidden cursor-pointer  md:inline">Become a host</p>
        <BiGlobe className="cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <BiMenu className="cursor-pointer" />
          <BiUserCircle className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
