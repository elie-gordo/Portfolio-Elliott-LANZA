
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import StartupSaas from "./pages/projects/StartupSaas";
import PythonJs from "./pages/projects/PythonJs";
import Web3Blockchain from "./pages/projects/Web3Blockchain";
import IaAutomation from "./pages/projects/IaAutomation";
import Ecole from "./pages/projects/Ecole";
import Design from "./pages/projects/Design";
import BottomNav from "./components/BottomNav";
import StarBackground from "./components/StarBackground";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <StarBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projets/startup-saas" element={<StartupSaas />} />
          <Route path="/projets/python-js" element={<PythonJs />} />
          <Route path="/projets/web3-blockchain" element={<Web3Blockchain />} />
          <Route path="/projets/ia-automation" element={<IaAutomation />} />
          <Route path="/projets/ecole" element={<Ecole />} />
          <Route path="/projets/design" element={<Design />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
