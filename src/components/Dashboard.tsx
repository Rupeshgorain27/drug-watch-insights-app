
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DrugInfoCard } from "./DrugInfoCard";
import { ReportADRForm } from "./ReportADRForm";
import { SymptomChecker } from "./SymptomChecker";
import { EducationResources } from "./EducationResources";
import { Settings } from "./Settings";
import { useEffect } from "react";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("drug-information");
  
  // Handle hash changes for direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && ["drug-information", "report-adr", "symptom-checker", "educational-resources", "settings"].includes(hash)) {
        setActiveTab(hash);
      }
    };
    
    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex-1 p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-medical-dark mb-2">Welcome to DrugWatch Insights</h2>
        <p className="text-gray-600">
          Monitor, analyze, and report adverse drug reactions to ensure medication safety
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Monitored Drugs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-primary">8</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2 added this month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Reported ADRs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-secondary">3</div>
            <p className="text-xs text-muted-foreground mt-1">
              Last reported 2 days ago
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Risk Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-moderate">Moderate</div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on your medication profile
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Next Dose</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-medical-accent">1h 45m</div>
            <p className="text-xs text-muted-foreground mt-1">
              Lisinopril, 10mg
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="mb-6 flex flex-wrap">
          <TabsTrigger value="drug-information">Drug Information</TabsTrigger>
          <TabsTrigger value="report-adr">Report ADR</TabsTrigger>
          <TabsTrigger value="symptom-checker">Symptom Checker</TabsTrigger>
          <TabsTrigger value="educational-resources">Educational Resources</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="drug-information" id="drug-information">
          <DrugInfoCard />
        </TabsContent>
        
        <TabsContent value="report-adr" id="report-adr">
          <ReportADRForm />
        </TabsContent>
        
        <TabsContent value="symptom-checker" id="symptom-checker">
          <SymptomChecker />
        </TabsContent>
        
        <TabsContent value="educational-resources" id="educational-resources">
          <EducationResources />
        </TabsContent>
        
        <TabsContent value="settings" id="settings">
          <Settings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
