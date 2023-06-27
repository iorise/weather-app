import React from "react";
import type { WeatherData } from "@/types";
import Image from "next/image";

type DataProps = {
  data: WeatherData;
};

const weather = ({ data }: DataProps) => {
  return (
    <div className="relative z-[2] mt-10">
      <div className="max-w-[300px] md:max-w-[300px] md:h-[300px] h-full flex items-center text-center justify-center w-full bg-slate-500 m-auto rounded-xl">
          <div>
          <div className="flex flex-1  p-5 ">
          <Image
            alt=""
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width={100}
            height={100}
            className=""
          />
          <p>{data.name}</p>
          </div>
          <p>Temp: {(data.main.temp - 273.15).toFixed(0)} °C</p>
          <p>Feels like: {(data.main.feels_like - 273.15).toFixed(0)} °C</p>
          <p>Wind: {(data.wind.speed * 3.6).toFixed(0)} km/h</p>
          <p>Humidity: {data.main.humidity} %</p>
          <p>{data.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default weather;
