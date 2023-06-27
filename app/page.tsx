"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Weather from "@/components/Weather";
import type { WeatherData } from "@/types";
import Search from "@/components/Search";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  async function getData() {
    try {
      const res = await fetch(url);
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.

      // Recommendation: handle errors
      if (!res.ok) {
        throw new Error("Invalid city name. Please try again");
      }
      const data = await res.json();
      setWeather(data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const fetchWeather = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    getData();
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
          loading={loading}
        />
      </div>
      <section>
        <div className="flex flex-col relative max-w-[800px] w-full m-auto items-center justify-between bg-slate-500"></div>
      </section>
      <footer>
        <Footer />
      </footer>
      {weather && <Weather data={weather} />}
      {error && !loading && (
        <p
          className="text-red-600 relative z-[2] items-center w-full justify-center m-auto text-center mt-2 
          "
        >
          {error}
        </p>
      )}
    </main>
  );
};

export default HomePage;
