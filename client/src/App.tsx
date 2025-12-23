import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navigation, Footer } from "@/components/Navigation";

// Pages
import Home from "@/pages/Home";
import Membership from "@/pages/Membership";
import Events from "@/pages/Events";
import Boating from "@/pages/Boating";
import Community from "@/pages/Community";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/membership" component={Membership} />
      <Route path="/events" component={Events} />
      <Route path="/boating" component={Boating} />
      <Route path="/community" component={Community} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
