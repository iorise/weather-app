"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Weather from "@/components/Weather";
import type { WeatherData } from "@/types";

type SearchProps = {
  city: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fetchWeather: (e: React.FormEvent) => void;
};

const Search = ({
  city,
  handleInputChange,
  fetchWeather,
}: SearchProps) => {
  return (
    <main>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]" />
      <Image
        src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
        layout="fill"
        className="object-cover"
        alt=""
      />
      <section>
        <div className="relative flex justify-between items-center md:max-w-[500px] w-[100%] m-auto md:px-0 px-5 pt-4 text-white z-[2]">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-3xl"
          >
            <div>
              <input
                className="bg-transparent border-none focus:outline-none text-xl"
                type="text"
                placeholder="Search city here"
                value={city}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
      </section>
      <section>
        <div className="flex flex-col relative max-w-[800px] w-full m-auto items-center justify-between bg-slate-500"></div>
      </section>
    </main>
  );
};

export default Search;
