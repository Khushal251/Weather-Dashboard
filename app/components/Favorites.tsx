'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface FavoritesProps {
  favorites: string[];
  onSelect: (city: string) => void;
  onRemove: (city: string) => void;
}

interface WeatherInfo {
  temperature: number;
  description: string;
  icon: string;
}

const Favorites: React.FC<FavoritesProps> = ({
  favorites,
  onSelect,
  onRemove,
}) => {
  const [weatherData, setWeatherData] = useState<Record<string, WeatherInfo>>({});

 
  useEffect(() => {
    const fetchWeatherData = async () => {
      const updatedWeatherData: Record<string, WeatherInfo> = {};
      for (const city of favorites) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
          );
          const data = response.data;
          updatedWeatherData[city] = {
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          };
        } catch (error) {
          console.error(`Failed to fetch weather for ${city}`, error);
        }
      }
      setWeatherData(updatedWeatherData);
    };

    if (favorites.length > 0) {
      fetchWeatherData();
    }
  }, [favorites]);

  return (
    <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-semibold text-blue-300 mb-4">Favorite Cities</h3>
      {favorites.length === 0 ? (
        <p className="text-gray-400 text-sm">No favorite cities added yet.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((city, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow-md transition-all"
            >
              <div className="flex justify-between items-center">
                <span
                  onClick={() => onSelect(city)}
                  className="text-lg font-medium text-white cursor-pointer hover:text-blue-400 transition"
                >
                  {city}
                </span>
                <button
                  onClick={() => onRemove(city)}
                  className="px-3 py-1 text-sm bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
              {weatherData[city] ? (
                <div className="flex items-center gap-3">
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherData[city].icon}@2x.png`}
                    alt={`${city} weather icon`}
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="text-gray-300 text-sm">
                      {weatherData[city].description}
                    </p>
                    <p className="text-blue-400 font-semibold">
                      {weatherData[city].temperature.toFixed(1)}°C
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">Loading...</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
