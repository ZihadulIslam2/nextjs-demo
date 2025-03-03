"use client"
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Counter");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};