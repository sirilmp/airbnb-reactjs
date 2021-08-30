import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-4 bg-white shadow-md p-5 md:px-10">
      <div className="flex relative items-center h-10 cursor-pointer my-auto">
        <Image
          src="/logo.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex col-span-2 items-center px-3 md:border-2 rounded-full py-1.5 justify-center mx-auto md:shadow-sm cursor-pointer md:hover:shadow-md duration-150 w-full">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Start your search"
          className=" bg-transparent pr-2 focus:outline-none flex-grow text-sm placeholder-gray-800 font-bold cursor-pointer w-full"
        />
        <SearchIcon className="hidden md:inline-flex h-9 main-bg-color text-white rounded-full p-2 " />
      </div>

      <div className="flex items-center justify-end space-x-4">
        <p className="text-gray-900 font-semibold hidden md:inline">Become a host</p>
        <GlobeAltIcon className="hidden md:inline-flex h-6 text-gray-800 cursor-pointer" />
        <div className="flex items-center space-x-2 border rounded-full py-1 px-2 duration-150 shadow-sm hover:shadow-md cursor-pointer">
          <MenuIcon className="h-6 text-gray-800" />
          <UserCircleIcon className="h-6 text-gray-600" />
        </div>
      </div>
    </header>
  );
}

export default Header;
