
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, FilePlus, AlertCircle, BookOpen, Settings } from "lucide-react";

export function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
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
            <SidebarMenuButton asChild isActive={isActive("/")} tooltip="Dashboard">
              <Link to="/">
                <Home className="mr-2" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/report-adr")} tooltip="Report ADR">
              <Link to="/report-adr">
                <FilePlus className="mr-2" />
                <span>Report ADR</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/symptom-checker")} tooltip="Symptom Checker">
              <Link to="/symptom-checker">
                <AlertCircle className="mr-2" />
                <span>Symptom Checker</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/education")} tooltip="Education Resources">
              <Link to="/education">
                <BookOpen className="mr-2" />
                <span>Education Resources</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={isActive("/settings")} tooltip="Settings">
              <Link to="/settings">
                <Settings className="mr-2" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </ShadcnSidebar>
  );
}
