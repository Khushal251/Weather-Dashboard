Weather Dashboard
A Weather Dashboard built with Next.js, TypeScript, and TailwindCSS. The application allows users to search for weather information, view current and 5-day weather forecasts, and manage a list of favorite cities.


Features
Search for a city to view its current weather and 5-day forecast.
Add and remove cities from a list of favorites.
Display weather details for favorite cities.
Switch between Celsius and Fahrenheit.
Save the last searched city using local storage.
Technologies Used
Frontend: Next.js, TypeScript, TailwindCSS
API: OpenWeatherMap
Backend: JSON Server for storing and managing favorite cities
Installation and Setup
Prerequisites
Node.js installed on your system
NPM (comes with Node.js)
OpenWeatherMap API key
Steps
Clone the repository:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following variables:

env
Copy code
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key
NEXT_PUBLIC_JSON_SERVER_URL=http://localhost:5000
Replace your_openweather_api_key with your OpenWeatherMap API key.

Start the JSON Server:

bash
Copy code
npx json-server --watch db.json --port 5000
Start the application:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

Obtaining an OpenWeatherMap API Key
Visit OpenWeatherMap and sign up for an account.
Generate your API key and use it in the .env file.
Project Structure
components: Contains reusable React components such as Search, WeatherDisplay, and FavoriteCities.
pages: Includes Next.js page components.
styles: Contains TailwindCSS styling for the application.
Future Improvements
Add support for additional weather details like humidity, wind speed, etc.
Improve UI/UX with animations and additional styling.
Deploy the application to a hosting platform like Vercel or Netlify.
