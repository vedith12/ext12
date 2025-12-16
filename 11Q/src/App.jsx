import React, { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  // Runs when component loads and when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p> count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
