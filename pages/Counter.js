import React, { useState } from "react";

// Counter component with increment and decrement buttons
const Counter = () => {
  const [count, setCount] = useState(0);

  // returns count based on increment button or decrement button click.
  return (
    <div>
      <h1> Counter: {count} </h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;
