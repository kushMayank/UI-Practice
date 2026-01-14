// Re-render Issue

//✅ memo	Stops re-render if props are same
// useCallback	Makes function reference stable
// Both	Stop child re-render caused by functions
import { useState, memo, useMemo, useCallback } from "react";

const users = [
  {
    name: "john",
    isActive: true,
  },
  {
    name: "mike",
    isActive: false,
  },
  {
    name: "sara",
    isActive: true,
  },
];
export const RerenderFixComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  console.log("Im am parent");

  const filteredUsers = useMemo(() => {
    return users.filter((u) => u.isActive).sort((a, b) => a.name - b.name);
  }, []);

  return (
    <>
      {count}
      <Child handleCount={handleIncrement} />
      {filteredUsers.map((user) => (
        <ul>{user.name}</ul>
      ))}
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
