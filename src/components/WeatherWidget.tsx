import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from "lucide-react";

const WeatherWidget = () => {
  // Real weather data will be loaded from weather API once configured
  const weatherData = {
    current: {
      temperature: 0,
      humidity: 0,
      windSpeed: 0,
      condition: "No data available",
      precipitation: 0
    },
    forecast: [
      { day: "Today", high: 0, low: 0, condition: "no-data" },
      { day: "Tomorrow", high: 0, low: 0, condition: "no-data" },
      { day: "Thursday", high: 0, low: 0, condition: "no-data" },
      { day: "Friday", high: 0, low: 0, condition: "no-data" }
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
      case "no-data":
        return <Cloud className="h-5 w-5 text-muted-foreground" />;
      default:
        return <Cloud className="h-5 w-5 text-muted-foreground" />;
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
            <span className="text-2xl font-bold">{weatherData.current.temperature || 0}°F</span>
            <Cloud className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mb-3">{weatherData.current.condition}</p>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Configure weather API in Settings to view live data</p>
          </div>
        </div>

        {/* Forecast */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-muted-foreground">Weather Forecast</h4>
          <div className="text-center py-4">
            <p className="text-sm text-muted-foreground">Connect weather API to view forecast</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;