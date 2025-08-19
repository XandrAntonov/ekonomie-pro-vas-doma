import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Premium from "./pages/Premium";
import Newsletter from "./pages/Newsletter";
import Tips from "./pages/Tips";
import GDPR from "./pages/GDPR";
import Cookies from "./pages/Cookies";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clanky" element={<Articles />} />
          <Route path="/clanek/:id" element={<Article />} />
          <Route path="/tipy" element={<Tips />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/obchodni-podminky" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
