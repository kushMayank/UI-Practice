// “useTransition improves responsiveness, not speed.”
// “Debouncing reduces work; transitions prioritize work.”
// “Concurrency is about interruption, not async.” -->Concurrency in React means React can work on multiple rendering tasks and pause, resume, or discard them.

// Build this mini app:

// Input search
// 10,000 rows
// Each row has heavy JSX
// Show lag
// Fix with:
// useTransition
// memo
// useMemo
// Add isPending skeleton
//✅ This alone makes you stand out in interviews.

import { useState, useMemo, memo, useTransition } from "react";

const rows = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  description: `This is a very long description for item ${i}`.repeat(5),
  tags: Array.from({ length: 10 }, (_, t) => `tag-${t}`),
}));

const HeavyRow = memo(({ row }) => {
  let total = 0;
  for (let i = 0; i < 10000; i++) {
    total += Math.sqrt(i);
  }

  return (
    <div className="row">
      <h3>{row.name}</h3>
      <p>{row.description}</p>

      <ul>
        {row.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {/* <div className="grid">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="box">
            <span>{total.toFixed(2)}</span>
          </div>
        ))}
      </div>*/}

      <button onClick={() => alert(row.name)}>Click me</button>
    </div>
  );
});

export function HeavyPage() {
  const [query, setQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  console.log("HeavyPage rows", rows);

  const filteredRows = useMemo(
    () =>
      rows.filter((row) =>
        row.name.toLowerCase().includes(filterQuery.toLowerCase()),
      ),
    [filterQuery],
  );
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    startTransition(() => {
      setFilterQuery(value);
    });
  };

  return (
    <>
      <input
        placeholder="Search 10,000 items..."
        value={query}
        onChange={handleChange}
      />
      {isPending && <div className="skeleton">Loading…</div>}
      <div>
        {filteredRows.map((row) => (
          <HeavyRow key={row.id} row={row} />
        ))}
      </div>
    </>
  );
}
