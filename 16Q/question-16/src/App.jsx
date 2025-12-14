import { useState } from "react";
import { createPortal } from "react-dom";



function Modal({s}) {
  return createPortal(
    <div style={overlay}>
      <div style={box}>
        <p>This is a modal</p>
        <button onClick={() => s(false)}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && <Modal s={setOpen}/>}
    </>
  );
}

const overlay = {
  // position: "fixed",
  // inset: 0,
  // background: "rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  inset : 0,
  background : "rgba(0,0,0,0.5)",

};

const box = {
    background: "white",
    padding: "20px",
};
