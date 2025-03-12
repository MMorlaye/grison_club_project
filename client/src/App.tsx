import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Clubs from "./pages/Clubs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import Forum from "./pages/Forum";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Membership from "./pages/Membership";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsDetail} />
      <Route path="/clubs" component={Clubs} />
      <Route path="/events" component={Events} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/resources" component={Resources} />
      <Route path="/forum" component={Forum} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/membership" component={Membership} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Router />
        </main>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;