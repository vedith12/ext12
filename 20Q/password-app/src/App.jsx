import { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");

  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const hasLength = password.length >= 8;

  const score =
    hasUpper + hasNumber + hasSpecial + hasLength;

  let strength = "Weak";
  let color = "red";

  if (score >= 3) {
    strength = "Medium";
    color = "orange";
  }
  if (score === 4) {
    strength = "Strong";
    color = "green";
  }

  return (
    <div style={{ width: 250 }}>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ border: `2px solid ${color}`, padding: 8 }}
      />
      <p style={{ color }}>{strength}</p>
    </div>
  );
}
