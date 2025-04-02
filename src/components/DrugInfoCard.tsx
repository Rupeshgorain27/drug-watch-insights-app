
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const commonDrugs = [
  { 
    name: "Lisinopril", 
    description: "ACE inhibitor used to treat high blood pressure and heart failure", 
    commonSideEffects: ["Dry cough", "Dizziness", "Headache"],
    severeReactions: ["Swelling of face/lips", "Difficulty breathing", "Severe dizziness"],
    interactsWith: ["Potassium supplements", "NSAIDs", "Lithium"]
  },
  { 
    name: "Metformin", 
    description: "Oral diabetes medication that helps control blood sugar levels", 
    commonSideEffects: ["Nausea", "Diarrhea", "Stomach upset"],
    severeReactions: ["Lactic acidosis", "Severe allergic reaction", "Hypoglycemia"],
    interactsWith: ["Certain contrast dyes", "Other diabetes medications", "Alcohol"]
  },
  { 
    name: "Atorvastatin", 
    description: "Statin medication used to lower cholesterol and triglycerides", 
    commonSideEffects: ["Muscle pain", "Joint pain", "Mild nausea"],
    severeReactions: ["Rhabdomyolysis", "Liver damage", "Severe allergic reaction"],
    interactsWith: ["Certain antibiotics", "Antifungal medications", "Grapefruit juice"]
  }
];

export function DrugInfoCard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-medical-dark">Drug Information Lookup</h3>
          <p className="text-muted-foreground">Search for detailed information about medications and their side effects</p>
        </div>
        <div className="w-full md:w-64">
          <Select>
            <SelectTrigger>
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
      </div>

      {commonDrugs.map((drug, index) => (
        <Card key={index} className="mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="text-xl text-medical-dark">{drug.name}</CardTitle>
                <CardDescription className="mt-1">{drug.description}</CardDescription>
              </div>
              <Badge className="self-start md:self-auto" variant="outline">Prescription</Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div>
              <h4 className="font-medium text-sm text-medical-dark mb-2">Common Side Effects</h4>
              <div className="flex flex-wrap gap-2">
                {drug.commonSideEffects.map((effect, i) => (
                  <Badge key={i} variant="secondary" className="bg-medical-light text-medical-dark">
                    {effect}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm text-medical-dark mb-2">Potential Severe Reactions</h4>
              <div className="flex flex-wrap gap-2">
                {drug.severeReactions.map((reaction, i) => (
                  <Badge key={i} variant="destructive" className="bg-red-100 text-red-700 border border-red-200">
                    {reaction}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm text-medical-dark mb-2">Drug Interactions</h4>
              <div className="flex flex-wrap gap-2">
                {drug.interactsWith.map((interaction, i) => (
                  <Badge key={i} className="bg-amber-100 text-amber-700 border border-amber-200">
                    {interaction}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
            <Button variant="outline" size="sm">Download Information</Button>
            <Button variant="default" size="sm" className="bg-medical-primary hover:bg-medical-secondary">
              Add to My Medications
            </Button>
          </CardFooter>
        </Card>
      ))}
      
      <div className="flex justify-center mt-4">
        <Button variant="outline" className="text-medical-primary border-medical-primary hover:bg-medical-light">
          View More Medications
        </Button>
      </div>
    </div>
  );
}
