import { useState } from "react";

export default function Password() {
  const [p, setP] = useState("");

  const checks = {
    upper: /[A-Z]/.test(p),
    number: /\d/.test(p),
    special: /[^A-Za-z0-9]/.test(p),
    length: p.length >= 8,
  };

  const score = Object.values(checks).filter(Boolean).length;

  const strength =
    score <= 1 ? "Weak" : score <= 3 ? "Medium" : "Strong";

  const color =
    strength === "Weak" ? "#e74c3c" :
    strength === "Medium" ? "#f39c12" : "#27ae60";

  return (
    <div style={{ width: "250px", fontFamily: "Arial" }}>
      <input
        type="password"
        placeholder="Enter password"
        value={p}
        onChange={(e) => setP(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          border: `2px solid ${color}`,
          borderRadius: "4px",
          outline: "none",
        }}
      />
      <p style={{ color, marginTop: "6px", fontWeight: "bold" }}>
        {strength}
      </p>
    </div>
  );
}
