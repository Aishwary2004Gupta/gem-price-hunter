
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CompareResults from "./pages/CompareResults";
import ProductDetails from "./pages/ProductDetails";
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
          <Route path="/compare" element={<CompareResults />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<NotFound />} /> {/* Temporarily using NotFound for About page */}
          <Route path="/faq" element={<NotFound />} /> {/* Temporarily using NotFound for FAQ page */}
          <Route path="/privacy" element={<NotFound />} /> {/* Temporarily using NotFound for Privacy page */}
          <Route path="/terms" element={<NotFound />} /> {/* Temporarily using NotFound for Terms page */}
          <Route path="/contact" element={<NotFound />} /> {/* Temporarily using NotFound for Contact page */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
