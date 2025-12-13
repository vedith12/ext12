function Students() {
  const data = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Riya" },
    { id: 3, name: "Suresh" }
  ];

  return (
    <ul>
      {data.map(s => <li key={s.id}>{s.name}</li>)}
    </ul>
  );
}

export default Students;
