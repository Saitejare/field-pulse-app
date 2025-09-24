import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [tokenSet, setTokenSet] = useState(false);
  const { toast } = useToast();

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) {
      toast({
        title: "Invalid Token",
        description: "Please enter a valid Mapbox token",
        variant: "destructive"
      });
      return;
    }

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        zoom: 10,
        center: [-95.7129, 37.0902], // Central US agricultural area
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add some sample farm markers
      const farms = [
        { lng: -95.7129, lat: 37.0902, name: "North Field - Corn", status: "healthy" },
        { lng: -95.7200, lat: 37.0850, name: "South Field - Soybeans", status: "warning" },
        { lng: -95.7000, lat: 37.0950, name: "East Field - Wheat", status: "healthy" },
      ];

      farms.forEach(farm => {
        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<div class="p-2">
            <h3 class="font-semibold">${farm.name}</h3>
            <p class="text-sm text-gray-600">Status: ${farm.status}</p>
          </div>`
        );

        const marker = new mapboxgl.Marker({
          color: farm.status === 'healthy' ? '#22c55e' : '#f59e0b'
        })
          .setLngLat([farm.lng, farm.lat])
          .setPopup(popup)
          .addTo(map.current!);
      });

      toast({
        title: "Map Loaded",
        description: "Mapbox map has been successfully initialized",
      });

    } catch (error) {
      toast({
        title: "Map Error", 
        description: "Failed to initialize map. Please check your token.",
        variant: "destructive"
      });
      console.error('Map initialization error:', error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setTokenSet(true);
      setTimeout(initializeMap, 100);
    } else {
      toast({
        title: "Token Required",
        description: "Please enter your Mapbox token",
        variant: "destructive"
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleTokenSubmit();
    }
  };

  if (!tokenSet) {
    return (
      <Card className="p-6 bg-gradient-card">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Enter Mapbox Token</h3>
          <p className="text-sm text-muted-foreground">
            Get your public token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
          </p>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="pk.eyJ1..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleTokenSubmit}>Set Token</Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden shadow-medium">
      <div ref={mapContainer} className="h-96 w-full" />
    </Card>
  );
};

export default Map;