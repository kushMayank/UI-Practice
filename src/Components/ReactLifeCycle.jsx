import React, { useState, useEffect } from "react";

function Counter() {
  console.log("1️⃣ Component render START");

  const [count, setCount] = useState(0);

  console.log("2️⃣ State value during render:", count);

  const increment = () => {
    console.log("🔵 3️⃣ Button clicked");
    console.log("🔵 4️⃣ Updating state...");

    setCount((prev) => {
      console.log("🟣 5️⃣ setState updater function called. Prev:", prev);
      return prev + 1;
    });

    console.log("🔵 6️⃣ setState called (UI not updated yet)");
  };

  useEffect(() => {
    console.log("🟢 9️⃣ useEffect runs AFTER DOM updated. New count:", count);
    return () => {
      console.log("🧹 Cleanup before next effect (if re-render)");
    };
  }, [count]);

  console.log("7️⃣ Returning JSX (Virtual DOM created)");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
