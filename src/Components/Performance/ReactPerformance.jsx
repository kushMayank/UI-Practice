// Re-render Issue

//✅ memo	Stops re-render if props are same
// useCallback	Makes function reference stable
// Both	Stop child re-render caused by functions
import { useState, memo, useCallback } from "react";

export const RerenderFixComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  console.log("Im am parent");
  return (
    <>
      {count}
      <Child handleCount={handleIncrement} />
    </>
  );
};

const Child = memo(({ handleCount }) => {
  console.log("Im am child");

  return (
    <>
      <button
        type="button"
        style={{ border: "1px solid gray" }}
        onClick={() => handleCount()}
      >
        Increment
      </button>
    </>
  );
});
