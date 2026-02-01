import { Switch, Route, Link, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Home, Shield, BookOpen, Scale, Menu, ShieldAlert } from "lucide-react";
import logoImage from "@assets/generated_images/dark_red_spider_shield_logo.png";
import HomePage from "@/pages/Home";
import SecurityPage from "@/pages/Security";
import ClassificationPage from "@/pages/Classification";
import LawPage from "@/pages/Law";
import NotFound from "@/pages/not-found";

const menuItems = [
  { title: "Главная", icon: Home, url: "/" },
  { title: "Правила безопасности", icon: Shield, url: "/security" },
  { title: "Классификация афер", icon: ShieldAlert, url: "/classification" },
  { title: "Законодательство РФ", icon: Scale, url: "/law" },
];

function AppSidebar() {
  const [location] = useLocation();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-4 mb-4 flex items-center gap-3">
            <img src={logoImage} alt="Logo" className="w-8 h-8 rounded-sm" />
            <h1 className="text-xl font-bold text-primary">
              SCAM.Тень
            </h1>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location === item.url}>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/classification" component={ClassificationPage} />
      <Route path="/law" component={LawPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "18rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex min-h-screen w-full bg-background text-foreground">
            <AppSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
              <header className="flex h-16 items-center justify-between border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <div className="flex items-center gap-4">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <nav className="hidden md:flex gap-6">
                    {menuItems.map(item => (
                      <Link key={item.url} href={item.url} className="text-sm font-medium hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                    ))}
                  </nav>
                </div>
              </header>
              <main className="flex-1 overflow-y-auto">
                <Router />
              </main>
              <footer className="border-t py-8 px-4 bg-card">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold text-primary mb-4">SCAM.Тень</h3>
                    <p className="text-sm text-muted-foreground">Ваш щит в мире цифровых угроз.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Горячие линии</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>МВД РФ: 102</li>
                      <li>НЦФБ: 8-800-222-22-22</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Официальные ресурсы</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>Госуслуги</li>
                      <li>Банк России</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Кибердружины</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>Лига безопасного интернета</li>
                      <li>Киберпатруль России</li>
                    </ul>
                  </div>
                </div>
                <div className="container mx-auto mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
                  © 2026 SCAM.Тень. Все права защищены.
                </div>
              </footer>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
