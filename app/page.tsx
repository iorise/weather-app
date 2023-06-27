"use client";

import React, { useState } from "react";
import Image from "next/image";
import Weather from "@/components/Weather";
import type { WeatherData } from "@/types";
import Search from "@/components/Search";
import Header from "@/components/Header";

const HomePage: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  async function getData() {
    const res = await fetch(url);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors

    const data = await res.json();
    setWeather(data);
    return data;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    console.log(city);
  };

  const fetchWeather = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    getData();
    setLoading(false);
  };

  return (
    <main>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[1]" />
      <Header className="pt-10" />
      <Image
        src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
        layout="fill"
        className="object-cover"
        alt=""
      />
      <div>
        <Search
          city={city}
          handleInputChange={handleInputChange}
          fetchWeather={fetchWeather}
        />
      </div>
      <section>
        <div className="flex flex-col relative max-w-[800px] w-full m-auto items-center justify-between bg-slate-500"></div>
      </section>
      {weather && <Weather data={weather} />}
    </main>
  );
};

export default HomePage;
