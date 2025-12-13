import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "1234")
      setMsg("Login successful");
    else
      setMsg("Invalid credentials");
  };

  return (
    <>
      <input
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>{msg}</p>
    </>
  );
}
