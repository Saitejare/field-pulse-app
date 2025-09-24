import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, PieChart as PieChartIcon } from "lucide-react";

const DashboardCharts = () => {
  // Real data will be loaded from your database once connected
  const yieldData = [
    { month: "Jan", corn: 0, soybeans: 0, wheat: 0 },
    { month: "Feb", corn: 0, soybeans: 0, wheat: 0 },
    { month: "Mar", corn: 0, soybeans: 0, wheat: 0 },
    { month: "Apr", corn: 0, soybeans: 0, wheat: 0 },
    { month: "May", corn: 0, soybeans: 0, wheat: 0 },
    { month: "Jun", corn: 0, soybeans: 0, wheat: 0 },
  ];

  const soilHealthData = [
    { field: "No Data", ph: 0, nitrogen: 0, phosphorus: 0, potassium: 0 },
  ];

  const cropDistribution = [
    { name: "No Data", value: 100, color: "#e5e7eb" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Yield Trends */}
      <Card className="bg-gradient-card shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5" />
            <span>Crop Yield Trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <p className="text-muted-foreground">Connect to database to view yield data</p>
          </div>
        </CardContent>
      </Card>

      {/* Soil Health */}
      <Card className="bg-gradient-card shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5" />
            <span>Soil Health by Field</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <p className="text-muted-foreground">Connect to database to view soil data</p>
          </div>
        </CardContent>
      </Card>

      {/* Crop Distribution */}
      <Card className="bg-gradient-card shadow-soft lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <PieChartIcon className="h-5 w-5" />
            <span>Crop Distribution Across Farm</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
            <p className="text-muted-foreground">Connect to database to view crop distribution</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;