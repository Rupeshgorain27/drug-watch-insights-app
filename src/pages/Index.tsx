
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex flex-col flex-1 md:ml-64">
          <Header />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Index;
