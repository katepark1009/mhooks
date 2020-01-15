import React, { useState } from "react"

//Example
function App() {
  const [item, setItem] = useState(1)
  // useState return array. It can be 'const item = useState(1)[0]'
  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)
  return (
    <div className="App">
      <h1>{item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
    </div>
  );
}