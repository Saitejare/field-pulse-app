import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, BarChart3, Cloud, Settings, User } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">AgroTech</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <Link to="/weather" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Cloud className="h-4 w-4" />
              <span>Weather</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-1" />
              Profile
            </Button>
            <Button size="sm" className="bg-gradient-primary border-0">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;