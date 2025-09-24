import Header from "@/components/Header";
import WeatherWidget from "@/components/WeatherWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, CloudRain, Wind, Thermometer, Eye, Gauge } from "lucide-react";

const Weather = () => {
  // Extended mock weather data
  const detailedWeather = {
    hourly: [
      { time: "6 AM", temp: 65, condition: "Clear", precipitation: 0 },
      { time: "9 AM", temp: 72, condition: "Sunny", precipitation: 0 },
      { time: "12 PM", temp: 78, condition: "Partly Cloudy", precipitation: 0 },
      { time: "3 PM", temp: 82, condition: "Cloudy", precipitation: 10 },
      { time: "6 PM", temp: 75, condition: "Light Rain", precipitation: 40 },
      { time: "9 PM", temp: 70, condition: "Clear", precipitation: 0 },
    ],
    conditions: {
      visibility: "10 mi",
      pressure: "30.15 in",
      uvIndex: 6,
      dewPoint: "65°F"
    },
    alerts: [
      { type: "info", message: "Optimal conditions for irrigation today" },
      { type: "warning", message: "Light rain expected this evening - consider delaying pesticide application" }
    ]
  };

  const getConditionIcon = (condition: string) => {
    if (condition.includes("Clear") || condition.includes("Sunny")) {
      return <Sun className="h-5 w-5 text-warning" />;
    } else if (condition.includes("Rain")) {
      return <CloudRain className="h-5 w-5 text-primary" />;
    } else {
      return <Cloud className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Weather Center</h1>
          <p className="text-muted-foreground">Detailed weather information for informed farming decisions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Weather Widget */}
          <div className="lg:col-span-1">
            <WeatherWidget />
          </div>

          {/* Hourly Forecast */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle>Hourly Forecast</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {detailedWeather.hourly.map((hour, index) => (
                    <div key={index} className="text-center p-3 bg-muted/20 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">{hour.time}</p>
                      <div className="my-2 flex justify-center">
                        {getConditionIcon(hour.condition)}
                      </div>
                      <p className="font-semibold">{hour.temp}°</p>
                      <p className="text-xs text-primary">{hour.precipitation}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Visibility</p>
                  <p className="text-xl font-semibold">{detailedWeather.conditions.visibility}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Gauge className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Pressure</p>
                  <p className="text-xl font-semibold">{detailedWeather.conditions.pressure}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Sun className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-sm text-muted-foreground">UV Index</p>
                  <p className="text-xl font-semibold">{detailedWeather.conditions.uvIndex}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Thermometer className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Dew Point</p>
                  <p className="text-xl font-semibold">{detailedWeather.conditions.dewPoint}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weather Alerts */}
        <div className="mt-8">
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle>Agricultural Weather Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {detailedWeather.alerts.map((alert, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      alert.type === 'warning' 
                        ? 'bg-warning/10 border-warning/20 text-warning-foreground' 
                        : 'bg-primary/10 border-primary/20 text-primary-foreground'
                    }`}
                  >
                    <p className="text-sm">{alert.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Weather;