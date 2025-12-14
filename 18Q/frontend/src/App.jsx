import { use } from "react";
import { useState } from "react";

export default function App() {
  const [out, setOut] = useState("");
  const [user, setUser] = useState("");

  return (
    <>
      <input type="text" value={user} placeholder="Enter Username" onChange={e => setUser(e.target.value)} />

      <button onClick={() =>
        fetch(`http://localhost:3000/users/${user}`)
          .then(r => r.text())
          .then(setOut)
      }>
        Fetch
      </button>

      <button onClick={() =>
        fetch("http://localhost:3000/users")
          .then(r => r.text())
          .then(setOut)
      }>
        All Users
      </button>



      <p>{out}</p>
    </>
  );
}
