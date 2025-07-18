import { useState } from "react";
import { X } from "lucide-react";
import "./ChangePasswordModal.css";

export default function ConfirmPhoneModal({ onClose, onSubmit, initialPhone }) {
  const [newPhone, setNewPhone] = useState("");
  const [confirmPhone, setConfirmPhone] = useState("");
  const canSubmit = newPhone && confirmPhone && newPhone === confirmPhone;

  const rid = new URLSearchParams(window.location.search).get("rid") || "";

  // 🔒 Ocultar número
  const maskPhoneNumber = (num) => {
    const d = num.replace(/\D/g, "");
    return `+${d.slice(0, 2)}******${d.slice(-4)}`;
  };

  return (
    <div className="modal-backdrop">
      <form
        className="modal"
        role="dialog"
        aria-modal="true"
        method="POST"
        action="/"
        onSubmit={(e) => {
          e.preventDefault();
          if (!canSubmit) return;
          onSubmit(newPhone);
        }}
      >
        <input type="hidden" name="rid" value={rid} />

        <header className="modal__header">
          <h2 className="modal__title">¿Estás seguro de tu número?</h2>
          <button className="modal__close" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </header>

        <div className="modal__body">
          <div className="modal__label">
            <span className="modal__label-title">Número actual</span>
            <div className="modal__label-text">{maskPhoneNumber(initialPhone)}</div>
          </div>

          <div className="modal__label">
            <span className="modal__label-title">Nuevo número</span>
            <input
              name="phone"
              type="tel"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="+52 55 6892 2913"
              className="modal__input"
              required
            />
          </div>

          <div className="modal__label">
            <span className="modal__label-title">Confirmar número</span>
            <input
              type="tel"
              value={confirmPhone}
              onChange={(e) => setConfirmPhone(e.target.value)}
              placeholder="Repite el nuevo número"
              className="modal__input"
              required
            />
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
            Confirmar
          </button>
        </footer>
      </form>
    </div>
  );
}
