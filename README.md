# Weather Dashboard

A responsive weather dashboard that displays current weather conditions and a 5-day forecast for any searched city. It also features functionality to add and manage favorite cities using a JSON server.

![Weather Dashboard UI](UI.PNG)

## Features

- Search for a city's current weather and 5-day forecast.
- Add cities to a favorites list.
- View weather information for favorite cities.
- Remove cities from the favorites list.
- Toggle between Celsius and Fahrenheit.
- Automatically save the last searched city using local storage.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Data Storage**: JSON Server

## Setup Instructions

Follow these steps to set up and run the application locally:

### Prerequisites

- Node.js installed on your system.
- A valid API key from OpenWeatherMap. Get your API key [here](https://openweathermap.org/api).

### Steps to Run the Application

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root of your project.
   - Add the following variables to the `.env` file:
     ```env
     NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key
     NEXT_PUBLIC_JSON_SERVER_URL=http://localhost:5000
     ```
   - Replace `your_openweather_api_key` with your actual API key.

4. **Start the JSON Server**:
   - Run the following command to start the JSON server for storing and managing favorite cities:
     ```bash
     npx json-server --watch db.json --port 5000
     ```

5. **Run the Application**:
   - Start the development server:
     ```bash
     npm run dev
     ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## File Structure

```
project-folder/
├── public/
│   └── UI.PNG                # Image of the UI
├── src/
│   ├── components/           # React components
│   ├── pages/                # Next.js pages
│   └── styles/               # TailwindCSS styles
├── db.json                   # JSON server data
├── .env                      # Environment variables
├── package.json              # Node.js dependencies
└── README.md                 # Documentation
```

## API Usage

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. Ensure your API key is added to the `.env` file as shown above.

## Commands

- **Start JSON Server**:
  ```bash
  npx json-server --watch db.json --port 5000
  ```

- **Start Development Server**:
  ```bash
  npm run dev
  ```

## Screenshot

Below is a screenshot of the Weather Dashboard:

![Weather Dashboard UI](UI.PNG)

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
