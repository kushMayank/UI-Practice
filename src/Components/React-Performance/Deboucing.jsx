// Debouncing: "Wait until they're done, then act once";
// Throttling: "Act regularly while they're doing it";
import { useEffect, useState } from "react";

export const SearchExportComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      console.log("searching for:", debouncedSearch);
    }
  });

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ border: "1px soild blue" }}
    />
  );
};

const useDebounce = (value, delay) => {
  const [debouncedSearch, setDebouncedSearch] = useState(value);

  useEffect(() => {
    const timer = setInterval(() => {
      setDebouncedSearch(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedSearch;
};

// in JS solution

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example: search input
const searchInput = document.querySelector("#search");
const handleSearch = debounce((e) => {
  console.log("Searching for:", e.target.value);
}, 500);

// searchInput.addEventListener("input", handleSearch);
