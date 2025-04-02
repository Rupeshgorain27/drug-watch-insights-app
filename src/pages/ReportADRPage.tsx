
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { ReportADRForm } from "@/components/ReportADRForm";
import { SidebarProvider } from "@/components/ui/sidebar";

export function ReportADRPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex h-full w-full">
          <Sidebar />
          <div className="flex flex-col flex-1 md:ml-64">
            <Header />
            <main className="flex-1 p-6">
              <h2 className="text-2xl font-bold mb-6">Report Adverse Drug Reaction</h2>
              <ReportADRForm />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
