
import { Search, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  active?: boolean;
  icon?: React.ReactNode;
};

const navItems: NavItem[] = [
  { title: "Dashboard", href: "#", active: true, icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Drug Information", href: "#drug-information", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8V21H3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 3H1V8H23V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 12H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Report ADR", href: "#report-adr", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V9L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Symptom Checker", href: "#symptom-checker", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Educational Resources", href: "#educational-resources", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: "Settings", href: "#settings", icon: <Settings className="h-4 w-4" /> },
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
            onClick={(e) => {
              if (item.href.startsWith('#') && item.href !== '#') {
                e.preventDefault();
                const tabId = item.href.substring(1);
                document.querySelector(`button[value="${tabId}"]`)?.click();
              }
            }}
          >
            <span className="mr-3">{item.icon}</span>
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
