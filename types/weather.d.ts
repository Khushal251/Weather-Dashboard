interface WeatherData {
    city: string;
    temperature: number;
    description: string;
    icon: string;
    forecast: {
      date: string;
      temperature: number;
      description: string;
      icon: string;
    }[];
  }
  