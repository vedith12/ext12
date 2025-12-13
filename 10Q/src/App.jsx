import React from "react";

function StudentList() {
  const students = [
    { roll: 1, name: "Amit", branch: "CSE" },
    { roll: 2, name: "Riya", branch: "ECE" },
    { roll: 3, name: "Suresh", branch: "EEE" }
  ];

  return (
    <div>
      <h3>Student List</h3>
      <ul>
        {students.map(s => (
          <li key={s.roll}>
            {s.roll} - {s.name} ({s.branch})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
