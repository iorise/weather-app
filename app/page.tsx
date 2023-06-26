"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

const HomePage: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  async function getData() {
    const res = await fetch(url);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors

    const data = await res.json();
    console.log(data);

    return data;
  }

  const fetchWeather = (e: React.FormEvent) => {
    setLoading(true);
    getData();
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
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
          <form className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 rounded-3xl">
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

export default HomePage;
