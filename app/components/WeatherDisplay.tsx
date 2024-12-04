'use client';

interface WeatherDisplayProps {
  weatherData: WeatherData;
  unit: 'C' | 'F';
  favorites: string[];
  onAddToFavorites: (city: string) => void;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  weatherData,
  unit,
  favorites,
  onAddToFavorites,
}) => {
  const isFavorite = favorites.includes(weatherData.city);

  const convertTemperature = (temp: number) => {
    return unit === 'F' ? (temp * 9) / 5 + 32 : temp;
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{weatherData.city}</h2>
          <p className="text-lg capitalize">{weatherData.description}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
          alt="weather icon"
          className="w-20 h-20"
        />
      </div>
      <div className="text-5xl font-semibold text-blue-400">
        {convertTemperature(weatherData.temperature).toFixed(1)}°{unit}
      </div>
      {!isFavorite && (
        <button
          onClick={() => onAddToFavorites(weatherData.city)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Add to Favorites
        </button>
      )}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">5-Day Forecast</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {weatherData.forecast.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-lg text-center shadow"
            >
              <p className="text-sm font-medium">
                {new Date(item.date).toLocaleDateString('en-US', {
                  weekday: 'short',
                })}
              </p>
              <img
                src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="forecast icon"
                className="w-12 h-12 mx-auto"
              />
              <p className="text-lg font-semibold">
                {convertTemperature(item.temperature).toFixed(1)}°{unit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
