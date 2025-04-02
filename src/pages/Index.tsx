
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { SidebarProvider } from "@/components/ui/sidebar";

const Index = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex h-full w-full">
          <Sidebar />
          <div className="flex flex-col flex-1 md:ml-64">
            <Header />
            <Dashboard />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
