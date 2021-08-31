import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const clearInput = () => {
    setSearchInput("");
  };

  const search = () => {
    // if(searchInput==='' || startDate==='' )
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-4 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="flex relative items-center h-10 cursor-pointer my-auto"
      >
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
          autocomplete="off"
          placeholder={"Start your search"}
          value={placeholder || searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" bg-transparent pr-2 focus:outline-none flex-grow text-sm placeholder-gray-800 font-semibold cursor-pointer w-full h-full"
        />
        <SearchIcon className="hidden md:inline-flex h-9 main-bg-color text-white rounded-full p-2 " />
      </div>

      <div className="flex items-center justify-end space-x-4">
        <p className="text-gray-900 font-semibold hidden md:inline">
          Become a host
        </p>
        <GlobeAltIcon className="hidden md:inline-flex h-6 text-gray-800 cursor-pointer" />
        <div className="flex items-center space-x-2 border rounded-full py-1 px-2 duration-150 shadow-sm hover:shadow-md cursor-pointer">
          <MenuIcon className="h-6 text-gray-800" />
          <UserCircleIcon className="h-6 text-gray-600" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-4 mx-auto mt-8">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FF385C"]}
            onChange={handleSelect}
          />
          <div className="flex items-center mb-4 border-b pb-2">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              min={1}
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              className="w-14 pl-2 text-lg outline-none main-text-color"
            />
          </div>
          <div className="flex justify-center gap-48">
            <button
              className=" text-gray-500 font-semibold hover:bg-gray-100 duration-200 py-2 px-5 rounded-md"
              onClick={clearInput}
            >
              Cancel
            </button>
            <button
              onClick={() => search()}
              className=" main-text-color font-semibold hover:bg-red-100 duration-200 py-2 px-5 rounded-md"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
