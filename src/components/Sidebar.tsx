
import React from "react";
import {
  SidebarProvider,
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, FilePlus, AlertCircle, BookOpen, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const handleNavigation = (route: string) => {
    const button = document.querySelector(`button[value="${route}"]`);
    if (button instanceof HTMLElement) {
      button.click();
    }
  };

  return (
    <ShadcnSidebar className="border-r">
      <SidebarContent>
        <div className="flex items-center justify-center p-4">
          <div className="relative w-8 h-8 rounded-full bg-medical-primary flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6H19C19.5304 6 20.0391 6.21071 20.4142 6.58579C20.7893 6.96086 21 7.46957 21 8V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 4V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 9L12 12L15 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-semibold text-sidebar-foreground ml-2">DrugWatch</span>
        </div>
        
        <SidebarMenu className="px-4 py-2">
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => handleNavigation("dashboard")} tooltip="Dashboard">
              <Home className="mr-2" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => handleNavigation("report-adr")} tooltip="Report ADR">
              <FilePlus className="mr-2" />
              <span>Report ADR</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => handleNavigation("symptom-checker")} tooltip="Symptom Checker">
              <AlertCircle className="mr-2" />
              <span>Symptom Checker</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => handleNavigation("education")} tooltip="Education Resources">
              <BookOpen className="mr-2" />
              <span>Education Resources</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton onClick={() => handleNavigation("settings")} tooltip="Settings">
              <Settings className="mr-2" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
