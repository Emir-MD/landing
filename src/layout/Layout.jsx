import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col font-sans">
      {/* ---- HEADER (simula Microsoft Entra) ---- */}
      <header className="h-14 w-full bg-white border-b border-slate-200 flex items-center px-6 text-sm text-slate-700 font-medium">
        Información de seguridad
      </header>

      {/* ---- BODY (Sidebar + panel principal) ---- */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar fijo sin shrink */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>

        {/* Lienzo gris con scroll interno */}
        <main className="flex-1 overflow-y-auto bg-[#f5f5f5]">
          {children}
        </main>
      </div>
    </div>
  );
}
