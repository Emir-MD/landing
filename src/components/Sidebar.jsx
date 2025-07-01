import {
  User,
  Shield,
  Monitor,
  KeyRound,
  Building2,
  Settings2,
  Clock4,
  AppWindow,
  UsersRound,
} from "lucide-react";
import "./sidebar.css";

const menu = [
  { label: "Información general", icon: User, group: 1 },
  { label: "Información de seguridad", icon: Shield, group: 1 },
  { label: "Dispositivos", icon: Monitor, group: 1 },
  { label: "Change Password", icon: KeyRound, group: 1 },
  { label: "Organizaciones", icon: Building2, group: 1 },
  { label: "Configuración y privacidad", icon: Settings2, group: 1 },
  { label: "Actividad reciente", icon: Clock4, group: 1 },
  { label: "Mis aplicaciones", icon: AppWindow, group: 2 },
  { label: "Mis grupos", icon: UsersRound, group: 2 },
];

export default function Sidebar({ active = "Información de seguridad" }) {
  return (
    <aside className="sidebar">
      {/* Header */}
      <div className="sidebar__header">
        <div className="sidebar__avatar">AM</div>
        <div className="sidebar__name">Aldo Morante</div>
        <div className="sidebar__email">aldo.morante@capa8.com</div>
      </div>

      {/* Navegación */}
      <nav className="sidebar__nav">
        {menu.map(({ label, icon: Icon, group }, idx) => (
          <div key={label}>
            {idx !== 0 && menu[idx - 1].group !== group && (
              <hr className="sidebar__separator" />
            )}
            <div
              className={`sidebar__item ${
                label === active ? "sidebar__item--active" : ""
              }`}
            >
              <Icon size={18} className="sidebar__icon" />
              <span className="sidebar__text">{label}</span>
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
