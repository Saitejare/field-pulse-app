import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, User, Bell, Map, Database } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Profile Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="farmName">Farm Name</Label>
                <Input id="farmName" placeholder="Enter your farm name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input id="ownerName" placeholder="Enter owner name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <Button className="w-full bg-gradient-primary border-0">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weather-alerts">Weather Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified about weather changes</p>
                </div>
                <Switch id="weather-alerts" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="crop-alerts">Crop Health Alerts</Label>
                  <p className="text-sm text-muted-foreground">Notifications for crop issues</p>
                </div>
                <Switch id="crop-alerts" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="irrigation-alerts">Irrigation Reminders</Label>
                  <p className="text-sm text-muted-foreground">Reminders for irrigation schedules</p>
                </div>
                <Switch id="irrigation-alerts" />
              </div>
            </CardContent>
          </Card>

          {/* API Settings */}
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Map className="h-5 w-5" />
                <span>API Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mapbox-token">Mapbox Token</Label>
                <Input 
                  id="mapbox-token" 
                  type="password" 
                  placeholder="pk.eyJ1..." 
                />
                <p className="text-xs text-muted-foreground">
                  Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weather-api">Weather API Key</Label>
                <Input 
                  id="weather-api" 
                  type="password" 
                  placeholder="Enter weather API key" 
                />
              </div>
              <Button className="w-full bg-gradient-primary border-0">
                Save API Keys
              </Button>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="bg-gradient-card shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5" />
                <span>Data Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-medium mb-2">Export Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download your farm data as CSV or JSON
                  </p>
                  <Button variant="outline" size="sm">
                    Export Data
                  </Button>
                </div>
                
                <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <h4 className="font-medium mb-2 text-destructive">Reset Data</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Clear all sample data (this cannot be undone)
                  </p>
                  <Button variant="destructive" size="sm">
                    Clear Sample Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;