import React, { useState } from 'react'

export default function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [op, setOp] = useState("")

  return (
    <div>
      <input onChange={e => setA(+e.target.value)} />
      <input onChange={e => setB(+e.target.value)} />

      <select onChange={e => setOp(e.target.value)}>
        <option value="">Select</option>
        <option value="+">Add</option>
        <option value="-">Sub</option>
        <option value="*">Mul</option>
        <option value="/">Div</option>
      </select>

      <p>
        {op == "+" && a + b}
        {op == "-" && a - b}
        {op == "*" && a * b}
        {op == "/" && (b ? a / b : 0)}
      </p>
    </div>
  )
}
