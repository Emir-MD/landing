import { X, CheckCircle2 } from "lucide-react";
import "./SuccessModal.css";

export default function SuccessModal({ onClose, message }) {
  return (
    <div className="win-modal-backdrop">
      <div className="win-modal" role="dialog" aria-modal="true">
        <header className="win-modal__header">
          <div className="win-modal__icon">
            <CheckCircle2 size={40} color="#2e8b57" />
          </div>
          <button className="win-modal__close" onClick={onClose} aria-label="Cerrar">
            <X size={20} />
          </button>
        </header>
        <div className="win-modal__body">
          <p className="win-modal__message">{message || "¡Datos guardados correctamente!"}</p>
        </div>
        <footer className="win-modal__footer">
          <button className="win-modal__btn" onClick={onClose}>
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  );
}
