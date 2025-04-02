
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "Understanding Adverse Drug Reactions",
    description: "Learn about what constitutes an ADR and how to identify one",
    type: "Article",
    readTime: "5 min read",
    content: `
      <p class="mb-4">Adverse Drug Reactions (ADRs) are unwanted or harmful reactions experienced after the administration of medication. These reactions can range from mild discomfort to severe life-threatening conditions.</p>
      <h4 class="font-medium mb-2">Types of ADRs</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Type A (Augmented): Dose-dependent and predictable reactions</li>
        <li>Type B (Bizarre): Not dose-dependent and unpredictable allergic reactions</li>
        <li>Type C (Chronic): Reactions that occur with long-term use</li>
        <li>Type D (Delayed): Reactions that appear after discontinuation</li>
      </ul>
      <h4 class="font-medium mb-2">Common Signs of ADRs</h4>
      <p class="mb-4">Be alert to unexpected symptoms after starting a new medication, especially rashes, difficulty breathing, or severe digestive issues.</p>
      <p>Remember, early identification and reporting of ADRs can help prevent serious complications and improve medication safety for everyone.</p>
    `
  },
  {
    title: "The Importance of ADR Reporting",
    description: "Why reporting ADRs matters and how it improves medication safety",
    type: "Video",
    readTime: "8 min video",
    content: `
      <p class="mb-4">Reporting Adverse Drug Reactions is crucial for several important reasons:</p>
      <h4 class="font-medium mb-2">Benefits of ADR Reporting</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Helps identify previously unknown drug reactions</li>
        <li>Contributes to medical knowledge and safer prescribing practices</li>
        <li>May lead to updates in medication labeling and usage guidelines</li>
        <li>Protects other patients from experiencing the same adverse effects</li>
      </ul>
      <h4 class="font-medium mb-2">How Reports Are Used</h4>
      <p class="mb-4">Your reports are analyzed by medical experts and regulatory authorities to identify patterns and take appropriate actions, such as adding warnings or, in severe cases, removing medications from the market.</p>
      <p>Even if you're unsure if a symptom is related to your medication, reporting it can help establish patterns over time.</p>
    `
  },
  {
    title: "Managing Medication Side Effects",
    description: "Strategies to cope with common side effects of medications",
    type: "Guide",
    readTime: "10 min read",
    content: `
      <p class="mb-4">Many medications have side effects that, while not serious enough to stop treatment, can impact quality of life. Here are strategies to manage common side effects:</p>
      <h4 class="font-medium mb-2">Nausea and Digestive Issues</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Take medications with food (unless directed otherwise)</li>
        <li>Stay hydrated and eat smaller, more frequent meals</li>
        <li>Avoid spicy, greasy, or very sweet foods</li>
      </ul>
      <h4 class="font-medium mb-2">Fatigue and Drowsiness</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Take medications before bedtime if appropriate</li>
        <li>Maintain regular physical activity</li>
        <li>Discuss timing of doses with your healthcare provider</li>
      </ul>
      <h4 class="font-medium mb-2">Dry Mouth</h4>
      <ul class="list-disc pl-5 mb-4">
        <li>Sip water frequently throughout the day</li>
        <li>Use sugar-free gum or lozenges</li>
        <li>Consider special mouth rinses designed for dry mouth</li>
      </ul>
      <p>Always consult your healthcare provider before making any changes to how you take your medications.</p>
    `
  }
];

export function EducationResources() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-medical-dark">Educational Resources</h3>
          <p className="text-muted-foreground">Learn about medication safety, ADRs, and best practices</p>
        </div>
      </div>

      <Tabs defaultValue="articles">
        <TabsList className="mb-6">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        
        <TabsContent value="articles" className="space-y-6">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-medical-dark">{resource.title}</CardTitle>
                    <CardDescription className="mt-1">{resource.description}</CardDescription>
                  </div>
                  <Badge variant="outline">{resource.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: resource.content }}></div>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-2">
                <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-medical-primary border-medical-primary hover:bg-medical-light"
                >
                  Read Full Article
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          <div className="flex justify-center mt-4">
            <Button variant="outline" className="text-medical-primary border-medical-primary hover:bg-medical-light">
              View More Articles
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="videos">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-medical-dark mb-2">Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  We're adding educational videos on medication safety and ADR reporting.
                  Check back soon for more resources.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="guides">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-medical-dark mb-2">Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed guides on medication management and safety will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="faq">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-lg font-medium text-medical-dark mb-2">Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  Frequently asked questions about medications and ADRs will be published soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
