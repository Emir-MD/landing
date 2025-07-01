import { useState } from "react";
import { Phone, KeyRound, ShieldCheck } from "lucide-react";

import ChangePasswordModal from "../components/ChangePasswordModal";
import ConfirmPhoneModal   from "../components/ConfirmPhoneModal";
import SuccessModal        from "../components/SuccessModal";

import "./security-info.css";

const maskPhoneNumber = (num) => {
  const d = num.replace(/\D/g, "");
  return `+${d.slice(0, 2)}******${d.slice(-4)}`;
};

const methods = [
  { id: 1, icon: Phone,  label: "Teléfono",    extra: maskPhoneNumber("+52 556892913"), actions: ["Cambiar"] },
  { id: 2, icon: KeyRound, label: "Contraseña", extra: "Última actualización: hace 15 días", actions: ["Cambiar"] },
  { id: 3, icon: ShieldCheck, label: "Microsoft Authenticator", sub: "Iniciar autenticación multifactor (MFA)", extra: "230B742L", actions: ["Eliminar"] },
];

export default function SecurityInfo() {
  const [step, setStep]           = useState(0);          // 0 nada | 1 pwd | 2 phone | 3 success
  const [flow, setFlow]           = useState("");         // 'phoneOnly' | 'pwdThenPhone'
  const [newPhone, setNewPhone]   = useState("");
  const [pwdUpdated, setPwdUpd]   = useState(false);

  /* ------------------- Render principal ------------------- */
  return (
    <>
      {/* Tabla de métodos */}
      <section className="secinfo">
        <div className="secinfo__box">
          <h1 className="secinfo__title">Información de seguridad</h1>
          <p className="secinfo__subtitle secinfo__warning">
            ⚠️ Te recomendamos estrictamente que actualices tu contraseña y tu número de teléfono lo antes posible para mantener tu cuenta segura.
          </p>

          <div className="secinfo__card">
            <div className="secinfo__add">+ Agregar método de inicio de sesión</div>

            {methods.map(({ id, icon: Icon, label, sub, extra, actions }) => (
              <div key={id} className="secinfo__row">
                <div className="secinfo__icon"><Icon size={18} /></div>
                <div className="secinfo__main">
                  <span>{label}</span>{sub && <small>{sub}</small>}
                </div>
                <div className="secinfo__extra">{extra}</div>

                <div className="secinfo__actions">
                  {actions.map((a) => (
                    <button
                      key={a}
                      onClick={() => {
                        if (label === "Teléfono") {
                          setFlow("phoneOnly");
                          setStep(2);
                        }
                        if (label === "Contraseña") {
                          setFlow("pwdThenPhone");
                          setStep(1);
                        }
                      }}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="secinfo__footer">
            ¿Ha perdido el dispositivo? <button className="secinfo__link">Cerrar todas las sesiones</button>
          </p>
        </div>
      </section>

      {/* Paso 1: Contraseña */}
      {step === 1 && (
        <ChangePasswordModal
          userEmail="aldo.morante@capa8.com"
          onClose={() => setStep(0)}
          onSubmit={() => {
            setPwdUpd(true);
            setStep(2);           // siempre continúa al teléfono
          }}
        />
      )}

      {/* Paso 2: Teléfono */}
      {step === 2 && (
        <ConfirmPhoneModal
          initialPhone="+52 556892913"
          onClose={() => setStep(0)}
          onSubmit={(phone) => {
            setNewPhone(phone);
            setStep(3);           // éxito
          }}
        />
      )}

      {/* Paso 3: Éxito */}
      {step === 3 && (
        <SuccessModal
          onClose={() => {
            // reset
            setStep(0);
            setFlow("");
            setPwdUpd(false);
            setNewPhone("");
          }}
          message={
            flow === "phoneOnly"
              ? `¡Tu número de teléfono (${newPhone}) se ha actualizado correctamente!`
              : "¡Tu contraseña y número de teléfono se han actualizado correctamente!"
          }
        />
      )}
    </>
  );
}
