import {
  Phone,
  KeyRound,
  ShieldCheck,
} from "lucide-react";
import "./security-info.css";

const methods = [
  {
    id: 1,
    icon: Phone,
    label: "Teléfono",
    extra: "+52 556892913",
    actions: ["Cambiar", "Eliminar"],
  },
  {
    id: 2,
    icon: KeyRound,
    label: "Contraseña",
    extra: "Última actualización: hace 15 días",
    actions: ["Cambiar"],
  },
  {
    id: 3,
    icon: ShieldCheck,
    label: "Microsoft Authenticator",
    sub: "Iniciar autenticación multifactor (MFA)",
    extra: "230B742L",
    actions: ["Eliminar"],
  },
];

export default function SecurityInfo() {
  return (
    <section className="secinfo">
      <div className="secinfo__box">
        <h1 className="secinfo__title">Información de seguridad</h1>

        <p className="secinfo__subtitle">
          Estos son los métodos que usa para iniciar sesión en su cuenta o
          restablecer su contraseña.
        </p>

        <p className="secinfo__note">
          Está usando el método de inicio de sesión más accesible donde es
          aplicable.
        </p>

        {/* tarjeta */}
        <div className="secinfo__card">
          <div className="secinfo__add">
            + Agregar método de inicio de sesión
          </div>

          {methods.map(({ id, icon: Icon, label, sub, extra, actions }) => (
            <div className="secinfo__row" key={id}>
              <div className="secinfo__icon">
                <Icon size={18} strokeWidth={1.7} />
              </div>

              <div className="secinfo__main">
                <span>{label}</span>
                {sub && <small>{sub}</small>}
              </div>

              <div className="secinfo__extra">{extra}</div>

              <div className="secinfo__actions">
                {actions.map((a) => (
                  <button key={a}>{a}</button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="secinfo__footer">
          ¿Ha perdido el dispositivo?{" "}
          <button>Cerrar todas las sesiones</button>
        </p>
      </div>
    </section>
  );
}
