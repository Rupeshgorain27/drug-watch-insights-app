
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  active?: boolean;
};

const navItems: NavItem[] = [
  { title: "Dashboard", href: "#", active: true },
  { title: "Drug Information", href: "#drug-information" },
  { title: "Report ADR", href: "#report-adr" },
  { title: "Symptom Checker", href: "#symptom-checker" },
  { title: "Educational Resources", href: "#educational-resources" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r bg-white px-4 py-6 fixed">
      <div className="flex items-center mb-8">
        <div className="relative w-8 h-8 mr-3">
          <div className="absolute w-8 h-8 rounded-full bg-medical-primary animate-pulse-ring" />
          <div className="relative w-8 h-8 rounded-full bg-medical-primary flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9L12 12L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h1 className="text-xl font-bold text-medical-dark">DrugWatch Insights</h1>
      </div>
      
      <div className="relative mb-6">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search medications..."
          className="w-full rounded-md border border-input bg-white px-8 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium",
              item.active
                ? "bg-medical-light text-medical-primary"
                : "text-gray-600 hover:bg-gray-100"
            )}
          >
            {item.title}
          </a>
        ))}
      </nav>
      
      <div className="mt-6 pt-6 border-t">
        <div className="rounded-md bg-medical-light p-3">
          <h3 className="font-semibold text-medical-primary mb-2">Need help?</h3>
          <p className="text-sm text-gray-600">
            Contact our support team for assistance with medication tracking or adverse reaction reporting.
          </p>
          <a href="#" className="text-sm text-medical-secondary font-medium mt-2 inline-block">
            Contact Support
          </a>
        </div>
      </div>
    </aside>
  );
}
