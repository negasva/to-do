import Sidebar from "@/components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[var(--paper-2)]">
      <Sidebar />
      <main className="flex-1 bg-[var(--paper)] p-8">{children}</main>
    </div>
  );
}
