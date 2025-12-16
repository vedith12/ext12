import { useState } from "react";

export default function App() {
  const [response, setResponse] = useState("");
  const [user, setUser] = useState("");

  return (
    <>
      <input
        placeholder="Enter Username"
        value={user}
        onChange={e => setUser(e.target.value)}
      />

      <button onClick={() =>
        fetch(`http://localhost:3000/users/${user}`)
          .then(r => r.text())
          .then(setResponse)
      }>
        Fetch
      </button>

      <button onClick={() =>
        fetch("http://localhost:3000/users")
          .then(r => r.text())
          .then(setResponse)
      }>
        All Users
      </button>

      <p>{response}</p>
    </>
  );
}
