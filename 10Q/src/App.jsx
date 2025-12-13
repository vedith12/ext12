import React, { useState } from "react";

export default function App() {
  const students = [
    { name: "Amit", marks: 85 },
    { name: "Neha", marks: 90 },
    { name: "Ravi", marks: 78 },
    { name: "Pooja", marks: 88 },
    { name: "Kiran", marks: 92 },
    { name: "Anu", marks: 80 }
  ];

  const [page, setPage] = useState(0);
  const perPage = 3;

  const start = page * perPage;
  const data = students.slice(start, start + perPage);

  return (
    <div>
      {data.map((s, i) => (
        <p key={i}>{s.name} - {s.marks}</p>
      ))}

      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Previous
      </button>
      <button
        disabled={start + perPage >= students.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
