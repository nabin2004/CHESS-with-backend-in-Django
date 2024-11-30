import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      

      
      <SidebarProvider>
        <AppSidebar />
  
        <main>
        <SidebarTrigger />
          {children}
        </main>

      </SidebarProvider>
    </ThemeProvider>
  )
}
