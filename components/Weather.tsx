import React from "react";
import type { WeatherData } from "@/types";
import Image from "next/image";


type DataProps = {
  data: WeatherData;
};

const weather = ({ data}: DataProps) => {
  const isWeatherAvailable = data.weather && data.weather.length > 0;
  const isMainAvailable = data.main && Object.keys(data.main).length > 0;


  return (
    <div className="relative z-[2] mt-10 text-white">
      <div className="max-w-[300px] md:max-w-[500px] md:h-[300px] h-full flex items-start text-center justify-center w-full m-auto rounded-xl bg-black/30">
        <div className="w-full">
          <div className="flex justify-between w-full items-center">
            <div>
              {isWeatherAvailable && (
                <Image
                  alt=""
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  width={150}
                  height={150}
                  className=""
                />
              )}
            </div>
            <div className="p-5">
              <p className="text-3xl font-bold">{data.name}</p>
              {isWeatherAvailable && (
                <p className="text-lg">{data.weather[0].description}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 text-xl gap-3 p-5">
            {isMainAvailable && (
              <>
                <div>
                  <p>Temp</p>
                  <p>{(data.main.temp - 273.15).toFixed(0)} °C</p>
                </div>
                <div>
                  <p>Feels like</p>
                  <p>{(data.main.feels_like - 273.15).toFixed(0)} °C</p>
                </div>
                <div>
                  <p>Wind</p>
                  <p>{(data.wind.speed * 3.6).toFixed(0)} km/h</p>
                </div>
                <div>
                  <p>Humidity</p>
                  <p>{data.main.humidity} %</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default weather;
