import Sidebar from "../blog/Sidebar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 px-4 md:px-8 py-8 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  );
}
