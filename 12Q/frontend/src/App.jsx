import React, { useState } from "react";

export default function App() {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [t, setT] = useState("");

  const login = async () => {
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: u, password: p })
    });

    if (!res.ok) {
    alert("Invalid credentials");
    return; // ⛔ stop redirect
  }
    const data = await res.json();

    // store JWT
    localStorage.setItem("token", data.token);
    setT(data.token);

    // 🔁 SIMPLE REDIRECT (no routes, no router)
    window.location.href = "/dashboard.html";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <input
        placeholder="Username"
        onChange={e => setU(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setP(e.target.value)}
      />
      <br /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}
