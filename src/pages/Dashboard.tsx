import Header from "@/components/Header";
import DashboardCharts from "@/components/DashboardCharts";
import WeatherWidget from "@/components/WeatherWidget";
import CropMonitoringForm from "@/components/CropMonitoringForm";
import Map from "@/components/Map";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, TrendingUp, AlertTriangle, Droplets } from "lucide-react";

const Dashboard = () => {
  // Mock dashboard stats
  const stats = [
    { label: "Total Fields", value: "24", icon: Sprout, change: "+2", changeType: "positive" },
    { label: "Avg Yield", value: "85%", icon: TrendingUp, change: "+5%", changeType: "positive" },
    { label: "Active Alerts", value: "3", icon: AlertTriangle, change: "-1", changeType: "positive" },
    { label: "Irrigation Status", value: "92%", icon: Droplets, change: "+8%", changeType: "positive" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Farm Dashboard</h1>
          <p className="text-muted-foreground">Monitor your crops, weather, and farm operations in real-time</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      <span className={`text-sm ${stat.changeType === 'positive' ? 'text-success' : 'text-destructive'}`}>
                        {stat.change}
                      </span>
                      <span className="text-xs text-muted-foreground ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-8">
            <DashboardCharts />
            
            {/* Farm Map */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Field Overview</h2>
              <Map />
            </div>
          </div>

          {/* Right Column - Widgets */}
          <div className="space-y-6">
            <WeatherWidget />
            <CropMonitoringForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;