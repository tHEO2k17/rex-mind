import { MainContent } from "@/shared/components/layout/main-content"
import { MobileNavbar } from "@/shared/components/layout/mobile-navbar"
import { SidebarProvider } from "@/shared/components/layout/sidebar-context"
import { TopNav } from "@/shared/components/layout/top-nav"
import { Sidebar } from "@/shared/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-secondary">
        <Sidebar />
        <MobileNavbar />
        <MainContent>
          <TopNav />
          <main className="p-6">{children}</main>
        </MainContent>
      </div>
    </SidebarProvider>
  )
}
