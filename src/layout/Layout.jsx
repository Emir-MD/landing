// src/layout/Layout.jsx
import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col font-sans">
      {/* ---- HEADER (idéntico a Entra) ---- */}
      <header className="h-14 w-full bg-white border-b border-slate-200 flex items-center px-6">
        {/* pon aquí logo o breadcrumb si lo necesitas */}
      </header>

      {/* ---- BODY (Sidebar + panel) ---- */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        {/* lienzo gris ocupa TODO lo restante */}
        <main className="flex-1 overflow-y-auto bg-[#f5f5f5]">
          {children}
        </main>
      </div>
    </div>
  );
}
