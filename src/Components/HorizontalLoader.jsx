import { useState, useEffect } from "react";

export default function HorizontalLoader() {
  const [barCount, setBarCount] = useState([]);

  const handleAddClick = () =>
    setBarCount((prevState) => [...prevState, Date.now()]);

  return (
    <div>
      <button className="btn btn-primary border" onClick={handleAddClick}>Add</button>
      {barCount.map((bar) => (
        <div key={bar}>
          <ProgressBar />
        </div>
      ))}
    </div>
  );
}

const ProgressBar = () => {
  const [barPercent, setBarPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 20ms * 100 = ~2000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: "#eee",
        borderRadius: 4,
        overflow: "hidden",
        margin: "10px 0",
      }}
    >
      <div
        style={{
          height: 20,
          width: `${barPercent}%`,
          backgroundColor: "#4caf50",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};