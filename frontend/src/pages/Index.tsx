import { Navbar } from "@/components/echo/Navbar";
import { AppSidebar } from "@/components/echo/AppSidebar";
import { RequestBuilder } from "@/components/echo/RequestBuilder";
import { AnimatePresence } from "framer-motion";

const Index = () => {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <AnimatePresence>
          <AppSidebar />
        </AnimatePresence>
        <main className="flex-1 overflow-hidden">
          <RequestBuilder />
        </main>
      </div>
    </div>
  );
};

export default Index;
