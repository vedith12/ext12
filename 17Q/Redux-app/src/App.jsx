import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

/* ---------- Redux ---------- */

// const SORT = "SORT";

const sortStudents = (order) => ({
  type: "SORT",
  order,
});

const initialState = {
  students: [
    { name: "Sai", marks: 70 },
    { name: "Jeevan", marks: 85 },
    { name: "C", marks: 60 },
  ],
};

function reducer(state = initialState, action) {
  if (action.type === "SORT") {
    const sorted = [...state.students].sort((a, b) =>
      action.order === "asc" ? a.marks - b.marks : b.marks - a.marks
    );
    return { students: sorted };
  }
  return state;
}

const store = createStore(reducer);

/* ---------- React ---------- */

function Students() {
  const students = useSelector((s) => s.students);
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(sortStudents("asc"))}>Asc</button>
      <button onClick={() => dispatch(sortStudents("desc"))}>Desc</button>

      {students.map((s, i) => (
        <p key={i}>{s.name} - {s.marks}</p>
      ))}
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Students />
    </Provider>
  );
}
