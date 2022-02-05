import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ title, handleClose, children }) {
  return ReactDOM.createPortal(
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" onClick={handleClose} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
