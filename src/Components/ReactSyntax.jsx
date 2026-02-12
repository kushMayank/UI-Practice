import { useState, useEffect, useRef } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}> + </button> {count}
    </>
  );
};

//"https://jsonplaceholder.typicode.com/users"
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        // Check if the request was successful
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json(); // Call .json() directly on the response

        console.log("-->", data);
        setUsers(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false); // This runs whether it succeeded or failed
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) return <> Loading ....</>;
  return <>{users && users.map((user) => <li>{user.name}</li>)}</>;
};

export const ControlledInput = () => {
  const [value, setValue] = useState("");

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};

export function FocusInput() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Click to Focus</button>
    </>
  );
}
