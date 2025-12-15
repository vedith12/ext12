import React, { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [op, setOp] = useState("")


  return (
    <div>
      <input type="number" onChange={e => setA(Number(e.target.value))} />
      <input type="number" onChange={e => setB(Number(e.target.value))} />

      <select onChange={e => setOp(e.target.value)}>
        <option value="" selected>Select</option>
        <option value="+">Add</option>
        <option value="-">Sub</option>
        <option value="*">Mul</option>
        <option value="/">Div</option>
      </select>

      <p>
        {op == "+" && a + b}
        {op == "-" && a - b}
        {op == "*" && a * b}
        {op == "/" && (b ? a / b : "Cannot divide by zero")}
      </p>
    </div>
  )
}
