import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("");

  const callAPI = async () => {
    const res = await fetch("http://localhost:5001/hello");
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div
      // style={{
      //   height: "100vh",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <button onClick={callAPI}>Call Server</button>
      <p>{message}</p>
    </div>
  );
}
