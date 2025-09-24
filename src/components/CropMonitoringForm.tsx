import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Sprout, Bug, Droplets } from "lucide-react";

const CropMonitoringForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fieldName: "",
    cropType: "",
    growthStage: "",
    healthStatus: "",
    pestIssues: "",
    irrigationStatus: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, this would submit to backend API
    toast({
      title: "Crop Data Recorded",
      description: `Successfully updated monitoring data for ${formData.fieldName}`,
    });
    
    // Reset form
    setFormData({
      fieldName: "",
      cropType: "",
      growthStage: "",
      healthStatus: "",
      pestIssues: "",
      irrigationStatus: "",
      notes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="bg-gradient-card shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sprout className="h-5 w-5" />
          <span>Crop Monitoring</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fieldName">Field Name</Label>
              <Input
                id="fieldName"
                value={formData.fieldName}
                onChange={(e) => handleInputChange("fieldName", e.target.value)}
                placeholder="e.g., North Field"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cropType">Crop Type</Label>
              <Select value={formData.cropType} onValueChange={(value) => handleInputChange("cropType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corn">Corn</SelectItem>
                  <SelectItem value="soybeans">Soybeans</SelectItem>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="cotton">Cotton</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="growthStage">Growth Stage</Label>
              <Select value={formData.growthStage} onValueChange={(value) => handleInputChange("growthStage", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select growth stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="germination">Germination</SelectItem>
                  <SelectItem value="vegetative">Vegetative</SelectItem>
                  <SelectItem value="flowering">Flowering</SelectItem>
                  <SelectItem value="fruiting">Fruiting</SelectItem>
                  <SelectItem value="maturity">Maturity</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="healthStatus">Health Status</Label>
              <Select value={formData.healthStatus} onValueChange={(value) => handleInputChange("healthStatus", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select health status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="fair">Fair</SelectItem>
                  <SelectItem value="poor">Poor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="pestIssues">Pest Issues</Label>
            <Input
              id="pestIssues"
              value={formData.pestIssues}
              onChange={(e) => handleInputChange("pestIssues", e.target.value)}
              placeholder="Describe any pest issues observed"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="irrigationStatus">Irrigation Status</Label>
            <Select value={formData.irrigationStatus} onValueChange={(value) => handleInputChange("irrigationStatus", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select irrigation status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="adequate">Adequate</SelectItem>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="excessive">Excessive</SelectItem>
                <SelectItem value="none">None</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              placeholder="Any additional observations or notes"
              rows={3}
            />
          </div>
          
          <Button type="submit" className="w-full bg-gradient-primary border-0">
            Record Crop Data
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CropMonitoringForm;