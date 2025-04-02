
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export function ReportADRForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setFormSubmitted(true);
    toast.success("ADR report submitted successfully", {
      description: "Thank you for contributing to medication safety"
    });
  };
  
  if (formSubmitted) {
    return (
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-medical-primary">Report Submitted</CardTitle>
          <CardDescription>Thank you for contributing to medication safety</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Your adverse drug reaction report has been submitted successfully. Our healthcare team will review your report
            and may contact you for additional information if necessary.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline" 
              onClick={() => setFormSubmitted(false)}
              className="border-medical-primary text-medical-primary hover:bg-medical-light"
            >
              Submit Another Report
            </Button>
            <Button
              variant="default"
              className="bg-medical-primary hover:bg-medical-secondary"
            >
              View My Reports
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl text-medical-dark">Report an Adverse Drug Reaction</CardTitle>
        <CardDescription>Fill out this form to report any suspected adverse drug reactions</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="medication">Medication Name</Label>
              <Select required>
                <SelectTrigger id="medication">
                  <SelectValue placeholder="Select medication" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lisinopril">Lisinopril</SelectItem>
                  <SelectItem value="metformin">Metformin</SelectItem>
                  <SelectItem value="atorvastatin">Atorvastatin</SelectItem>
                  <SelectItem value="levothyroxine">Levothyroxine</SelectItem>
                  <SelectItem value="amlodipine">Amlodipine</SelectItem>
                  <SelectItem value="omeprazole">Omeprazole</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="dosage">Dosage</Label>
              <div className="flex gap-3">
                <Input id="dosage" type="text" placeholder="e.g., 10" className="flex-1" />
                <Select defaultValue="mg">
                  <SelectTrigger className="w-[80px]">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mg">mg</SelectItem>
                    <SelectItem value="g">g</SelectItem>
                    <SelectItem value="ml">ml</SelectItem>
                    <SelectItem value="mcg">mcg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="symptoms">Symptoms Experienced</Label>
              <Textarea 
                id="symptoms" 
                placeholder="Describe the symptoms you experienced"
                rows={3}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="when-started">When did symptoms start?</Label>
              <Input id="when-started" type="date" required />
            </div>
            
            <div>
              <Label>Severity of Reaction</Label>
              <RadioGroup defaultValue="moderate" className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mild" id="mild" />
                  <Label htmlFor="mild" className="text-medical-mild font-medium">Mild</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="moderate" id="moderate" />
                  <Label htmlFor="moderate" className="text-medical-moderate font-medium">Moderate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="severe" id="severe" />
                  <Label htmlFor="severe" className="text-medical-severe font-medium">Severe</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="actions">Actions Taken</Label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="stopped-medication" />
                  <Label htmlFor="stopped-medication">Stopped taking medication</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="reduced-dose" />
                  <Label htmlFor="reduced-dose">Reduced dosage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="contacted-doctor" />
                  <Label htmlFor="contacted-doctor">Contacted healthcare provider</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="emergency-care" />
                  <Label htmlFor="emergency-care">Sought emergency care</Label>
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea 
                id="additional-info" 
                placeholder="Any other relevant information about this reaction"
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-6">
            <Checkbox id="confirm" required />
            <Label htmlFor="confirm">
              I confirm that the information provided is accurate to the best of my knowledge
            </Label>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
            <Button type="button" variant="outline">Cancel</Button>
            <Button 
              type="submit" 
              className="bg-medical-primary hover:bg-medical-secondary"
            >
              Submit Report
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
