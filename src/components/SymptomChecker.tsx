
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type SymptomResult = {
  severity: "mild" | "moderate" | "severe";
  likelihood: number;
  isNormal: boolean;
  recommendations: string[];
};

const commonSymptoms = [
  "Headache",
  "Nausea",
  "Dizziness",
  "Fatigue",
  "Rash",
  "Stomach pain",
  "Diarrhea",
  "Dry mouth",
  "Insomnia",
  "Cough",
  "Joint pain",
  "Swelling",
];

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedMedication, setSelectedMedication] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<SymptomResult | null>(null);
  
  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };
  
  const handleMedicationChange = (value: string) => {
    setSelectedMedication(value);
  };
  
  const analyzeSymptoms = () => {
    // This is a mock analysis - in a real app this would connect to a backend
    const hasHeadache = selectedSymptoms.includes("Headache");
    const hasNausea = selectedSymptoms.includes("Nausea");
    const hasDizziness = selectedSymptoms.includes("Dizziness");
    const hasRash = selectedSymptoms.includes("Rash");
    
    let severity: "mild" | "moderate" | "severe" = "mild";
    let likelihood = 30;
    let isNormal = true;
    let recommendations = ["Continue monitoring your symptoms"];
    
    // Mock logic for Lisinopril
    if (selectedMedication === "lisinopril") {
      if (hasDizziness && hasHeadache) {
        severity = "moderate";
        likelihood = 75;
        isNormal = true;
        recommendations = [
          "These are common side effects of Lisinopril",
          "Stay hydrated and monitor your blood pressure",
          "Contact your doctor if symptoms persist for more than 2 days"
        ];
      }
      
      if (hasRash) {
        severity = "severe";
        likelihood = 90;
        isNormal = false;
        recommendations = [
          "This could be a serious allergic reaction",
          "Stop taking the medication immediately",
          "Seek immediate medical attention"
        ];
      }
    }
    
    // Mock logic for Metformin
    if (selectedMedication === "metformin") {
      if (hasNausea) {
        severity = "mild";
        likelihood = 85;
        isNormal = true;
        recommendations = [
          "This is a very common side effect of Metformin",
          "Take the medication with food to reduce nausea",
          "Symptoms usually improve after a few weeks"
        ];
      }
      
      if (hasNausea && hasDizziness) {
        severity = "moderate";
        likelihood = 65;
        isNormal = true;
        recommendations = [
          "These are known side effects of Metformin",
          "Make sure you're eating enough and staying hydrated",
          "Contact your doctor if symptoms are severe or persistent"
        ];
      }
    }
    
    setAnalysisResult({
      severity,
      likelihood,
      isNormal,
      recommendations
    });
  };
  
  const resetForm = () => {
    setSelectedSymptoms([]);
    setSelectedMedication("");
    setAnalysisResult(null);
  };
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild": return "text-medical-mild";
      case "moderate": return "text-medical-moderate";
      case "severe": return "text-medical-severe";
      default: return "";
    }
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-medical-dark">Symptom Checker</CardTitle>
          <CardDescription>Check if your symptoms might be related to a medication</CardDescription>
        </CardHeader>
        <CardContent>
          {!analysisResult ? (
            <div className="space-y-6">
              <div>
                <Label>Select Medication</Label>
                <Select 
                  value={selectedMedication} 
                  onValueChange={handleMedicationChange}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose medication" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lisinopril">Lisinopril</SelectItem>
                    <SelectItem value="metformin">Metformin</SelectItem>
                    <SelectItem value="atorvastatin">Atorvastatin</SelectItem>
                    <SelectItem value="levothyroxine">Levothyroxine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="mb-2 block">Select Symptoms (Choose all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-2">
                  {commonSymptoms.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`symptom-${symptom}`} 
                        checked={selectedSymptoms.includes(symptom)}
                        onCheckedChange={() => toggleSymptom(symptom)}
                      />
                      <Label htmlFor={`symptom-${symptom}`}>{symptom}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
                <Button 
                  onClick={analyzeSymptoms} 
                  disabled={selectedSymptoms.length === 0 || !selectedMedication}
                  className="bg-medical-primary hover:bg-medical-secondary"
                >
                  Analyze Symptoms
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-medium text-lg text-medical-dark">Analysis Results</h3>
                    <p className="text-muted-foreground">
                      Based on {selectedSymptoms.length} reported symptom{selectedSymptoms.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <Badge 
                    className={`${
                      analysisResult.isNormal 
                        ? 'bg-blue-100 text-blue-800 border-blue-200' 
                        : 'bg-red-100 text-red-800 border-red-200'
                    } mt-2 md:mt-0`}
                  >
                    {analysisResult.isNormal ? 'Expected Side Effect' : 'Potential ADR'}
                  </Badge>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Likelihood of relation to medication</span>
                      <span className="text-sm font-medium">{analysisResult.likelihood}%</span>
                    </div>
                    <Progress value={analysisResult.likelihood} className="h-2" />
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium">Severity</span>
                    <div className={`text-xl font-bold mt-1 ${getSeverityColor(analysisResult.severity)}`}>
                      {analysisResult.severity.charAt(0).toUpperCase() + analysisResult.severity.slice(1)}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Recommendations</h3>
                <ul className="space-y-2">
                  {analysisResult.recommendations.map((recommendation, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-medical-primary flex-shrink-0"></div>
                      <span>{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="outline" onClick={resetForm}>
                  Check Different Symptoms
                </Button>
                {analysisResult.severity === "severe" && (
                  <Button variant="destructive">
                    Report as ADR
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
