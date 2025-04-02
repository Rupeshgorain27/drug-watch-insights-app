
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center border-b bg-white px-6 md:px-8">
      <div className="md:hidden">
        <Button variant="ghost" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <line x1="9" x2="15" y1="9" y2="9" />
            <line x1="9" x2="15" y1="15" y2="15" />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
      <div className="flex items-center md:hidden ml-2">
        <div className="relative w-6 h-6 mr-2">
          <div className="relative w-6 h-6 rounded-full bg-medical-primary flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9L12 12L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <span className="font-semibold text-medical-dark">DrugWatch</span>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <Button variant="outline" className="hidden md:flex">
          Report New ADR
        </Button>
        <Button variant="ghost" className="relative" size="icon">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-medical-accent" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" className="rounded-full" size="icon">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=user123"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <span className="sr-only">User Profile</span>
        </Button>
      </div>
    </header>
  );
}
