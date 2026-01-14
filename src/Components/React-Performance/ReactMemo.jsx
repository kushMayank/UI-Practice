// In React, React.memo fails with objects because it uses shallow comparison (via Object.is) to check if props have changed.
// Parent re-renders
import { useMemo, memo } from "react";

export const Parent = () => {
  // This object gets a NEW reference every time Parent renders
  //   const user = { name: "Sagar" };

  const user = useMemo(() => ({ name: "Sagar" }), []); // Stays ID 101 forever

  return <Child user={user} />;
};

// Child re-renders every time because user !== previousUser (by reference)
const Child = memo(({ user }) => {
  return <div>{user.name}</div>;
});
