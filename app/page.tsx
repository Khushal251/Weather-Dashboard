'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import Favorites from './components/Favorites';

const Home = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [unit, setUnit] = useState<'C' | 'F'>('C');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setError(null);
    setWeatherData(null);

    if (!city.trim()) {
      setError('Please enter a valid city name.');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`
      );
      const data = response.data;

      setWeatherData({
        city: data.city.name,
        temperature: data.list[0].main.temp,
        description: data.list[0].weather[0].description,
        icon: data.list[0].weather[0].icon,
        forecast: data.list.slice(1, 6).map((item: any) => ({
          date: item.dt_txt,
          temperature: item.main.temp,
          description: item.weather[0].description,
          icon: item.weather[0].icon,
        })),
      });


      localStorage.setItem('lastSearchedCity', city);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setError('City not found. Please check the name and try again.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

 
  const toggleUnit = () => {
    setUnit((prev) => (prev === 'C' ? 'F' : 'C'));
  };

  const addToFavorites = (city: string) => {
    if (!favorites.includes(city)) {
      setFavorites((prev) => [...prev, city]);
    }
  };


  const removeFromFavorites = (city: string) => {
    setFavorites((prev) => prev.filter((item) => item !== city));
  };

  useEffect(() => {
    const lastSearchedCity = localStorage.getItem('lastSearchedCity');
    if (lastSearchedCity) {
      fetchWeather(lastSearchedCity);
    }
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <header className="bg-gray-800 p-4 text-center">
        <h1 className="text-4xl font-semibold text-blue-400">Weather Dashboard</h1>
      </header>
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <section className="lg:col-span-3 space-y-8">
          <Search onSearch={fetchWeather} />
          {error && (
            <div className="bg-red-600 text-white p-3 rounded-lg">{error}</div>
          )}
          {weatherData && (
            <>
              <button
                onClick={toggleUnit}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow text-white font-medium transition"
              >
                Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
              </button>
              <WeatherDisplay
                weatherData={weatherData}
                unit={unit}
                favorites={favorites}
                onAddToFavorites={addToFavorites}
              />
            </>
          )}
        </section>

  
        <aside className="bg-gray-800 p-6 rounded-lg shadow h-fit">
          <Favorites
            onSelect={fetchWeather}
            favorites={favorites}
            onRemove={removeFromFavorites}
          />
        </aside>
      </main>
    </div>
  );
};

export default Home;
