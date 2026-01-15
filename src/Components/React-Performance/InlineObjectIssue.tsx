/*
KEY CONCEPT:
- React compares props by REFERENCE, not by VALUE
- New object/function === new reference
- This breaks memoization (React.memo, useMemo, useCallback)
*/


/* ❌ What’s the problem?
- React optimizations like:
  React.memo
  useMemo
  useCallback
  work using shallow comparison.---> { color: "red" } !== { color: "red" }
*/


// ❌ Bad examples (break memoization)
// 1️⃣ Inline style objects
// <Component style={{ color: "red" }} />

// 2️⃣ Inline arrow functions
// <button onClick={() => handleClick(id)}>Click</button>

// 3️⃣ Inline functions inside .map
// items.map(item => (
//   <Item onSelect={() => select(item.id)} />
// ))

// 4️⃣ Dynamic className strings
// <div className={`box ${isActive ? "active" : ""}`} />


// ✅ Correct solutions

// ✅ 1️⃣ Extract objects outside component

// const redStyle = { color: "red" };

// function App() {
//   return <Component style={redStyle} />;
// }

// ✅ 2️⃣ Use CSS classes instead of inline styles. -> <div className="error-text" />

// ✅ 3️⃣ Use useCallback for functions

// const handleClick = useCallback(() => {
//   doSomething();
// }, []);

// <button onClick={handleClick} />

// ✅ 4️⃣ Use useMemo for dynamic objects

// const style = useMemo(() => ({
//   color: isActive ? "green" : "gray"
// }), [isActive]);

// ✅ 5️⃣ Move functions out of .map

// const handleSelect = useCallback((id) => {
//   select(id);
// }, []);

// items.map(item => (
//   <Item key={item.id} onSelect={handleSelect} id={item.id} />
// ))