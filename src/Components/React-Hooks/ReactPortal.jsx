import { useState } from "react";
import { createPortal } from "react-dom";



const Modal = ({ children }) => {
    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById("modal-root")
    )
}

function App() {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <h1>Hi,App</h1>
            <button handleClick={()=>setModalOpen(true)}>Click me to open Modal </button>
            {
                isModalOpen && <Modal>
                    <h2>Modal Header</h2>
                    <p>Modal content</p>
                    <button onClick={()=>setModalOpen(false)}> Click to close modal</button>
                </Modal>
            }
        </>
    )

}
