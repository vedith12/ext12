import React, { useState } from "react";

export default function App() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [t, setT] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: u, password: p })
    });
    const data = await res.json();
    setT(data.token);
  };

  return (
    <div>
      <input placeholder="Username" onChange={e=>setU(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setP(e.target.value)} />
      <button onClick={login}>Login</button>
      <p>JWT Token (Generated) - {t}</p>
    </div>
  );
}
