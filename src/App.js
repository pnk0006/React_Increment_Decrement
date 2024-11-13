import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      return prevCount - 1;
    });
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
