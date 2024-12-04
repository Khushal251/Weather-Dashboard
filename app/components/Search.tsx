'use client';
import { useState } from 'react';

const Search = ({ onSearch }: { onSearch: (city: string) => void }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg shadow"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-1 p-3 bg-gray-700 text-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
