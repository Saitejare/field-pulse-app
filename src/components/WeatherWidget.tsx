import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from "lucide-react";

const WeatherWidget = () => {
  // Mock weather data - in real app, this would come from weather API
  const weatherData = {
    current: {
      temperature: 75,
      humidity: 68,
      windSpeed: 12,
      condition: "Partly Cloudy",
      precipitation: 0.2
    },
    forecast: [
      { day: "Today", high: 78, low: 65, condition: "sunny" },
      { day: "Tomorrow", high: 82, low: 68, condition: "cloudy" },
      { day: "Thursday", high: 74, low: 60, condition: "rainy" },
      { day: "Friday", high: 79, low: 63, condition: "sunny" }
    ]
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-5 w-5 text-warning" />;
      case "cloudy":
        return <Cloud className="h-5 w-5 text-muted-foreground" />;
      case "rainy":
        return <CloudRain className="h-5 w-5 text-primary" />;
      default:
        return <Sun className="h-5 w-5 text-warning" />;
    }
  };

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Cloud className="h-5 w-5" />
          <span>Weather Conditions</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Weather */}
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold">{weatherData.current.temperature}°F</span>
            <Cloud className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mb-3">{weatherData.current.condition}</p>
          
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="flex items-center space-x-1">
              <Droplets className="h-4 w-4 text-primary" />
              <span>{weatherData.current.humidity}%</span>
            </div>
            <div className="flex items-center space-x-1">
              <Wind className="h-4 w-4 text-muted-foreground" />
              <span>{weatherData.current.windSpeed} mph</span>
            </div>
            <div className="flex items-center space-x-1">
              <CloudRain className="h-4 w-4 text-primary" />
              <span>{weatherData.current.precipitation}"</span>
            </div>
          </div>
        </div>

        {/* Forecast */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground">4-Day Forecast</h4>
          {weatherData.forecast.map((day, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <span className="text-sm font-medium">{day.day}</span>
              <div className="flex items-center space-x-2">
                {getWeatherIcon(day.condition)}
                <span className="text-sm">{day.high}°/{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;