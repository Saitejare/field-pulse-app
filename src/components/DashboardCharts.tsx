import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, BarChart3, PieChart as PieChartIcon } from "lucide-react";

const DashboardCharts = () => {
  // Mock data for charts
  const yieldData = [
    { month: "Jan", corn: 85, soybeans: 72, wheat: 90 },
    { month: "Feb", corn: 88, soybeans: 75, wheat: 92 },
    { month: "Mar", corn: 92, soybeans: 78, wheat: 95 },
    { month: "Apr", corn: 95, soybeans: 82, wheat: 88 },
    { month: "May", corn: 98, soybeans: 85, wheat: 92 },
    { month: "Jun", corn: 102, soybeans: 88, wheat: 96 },
  ];

  const soilHealthData = [
    { field: "North Field", ph: 6.8, nitrogen: 85, phosphorus: 72, potassium: 90 },
    { field: "South Field", ph: 6.5, nitrogen: 78, phosphorus: 68, potassium: 85 },
    { field: "East Field", ph: 7.0, nitrogen: 92, phosphorus: 75, potassium: 88 },
    { field: "West Field", ph: 6.9, nitrogen: 88, phosphorus: 80, potassium: 92 },
  ];

  const cropDistribution = [
    { name: "Corn", value: 35, color: "#22c55e" },
    { name: "Soybeans", value: 28, color: "#3b82f6" },
    { name: "Wheat", value: 22, color: "#f59e0b" },
    { name: "Cotton", value: 15, color: "#8b5cf6" },
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
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="corn" 
                stroke="hsl(120 50% 45%)" 
                strokeWidth={2}
                name="Corn"
              />
              <Line 
                type="monotone" 
                dataKey="soybeans" 
                stroke="hsl(45 85% 60%)" 
                strokeWidth={2}
                name="Soybeans"
              />
              <Line 
                type="monotone" 
                dataKey="wheat" 
                stroke="hsl(35 50% 45%)" 
                strokeWidth={2}
                name="Wheat"
              />
            </LineChart>
          </ResponsiveContainer>
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
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={soilHealthData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="field" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="nitrogen" fill="hsl(120 50% 45%)" name="Nitrogen" />
              <Bar dataKey="phosphorus" fill="hsl(45 85% 60%)" name="Phosphorus" />
              <Bar dataKey="potassium" fill="hsl(35 50% 45%)" name="Potassium" />
            </BarChart>
          </ResponsiveContainer>
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
          <div className="flex flex-col lg:flex-row items-center">
            <ResponsiveContainer width="100%" height={300} className="lg:w-1/2">
              <PieChart>
                <Pie
                  data={cropDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {cropDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            
            <div className="lg:w-1/2 lg:pl-6 mt-4 lg:mt-0">
              <div className="space-y-3">
                {cropDistribution.map((crop, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: crop.color }}
                      />
                      <span className="font-medium">{crop.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{crop.value}% of farm</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;