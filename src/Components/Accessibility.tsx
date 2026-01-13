// Web Content Accessibility Guidelines,

import { useRef, useState } from "react";

const menuItem = ["home", "profile", "contact"];

// Define an interface for better readability (Standard Practice)

interface MenuProps {
  items: string[];
}

function Menu({ items }: MenuProps) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  return (
    <nav aria-label="Main Navigation">
      <div role="menubar" aria-orientation="horizontal">
        {items.map((label, i) => (
          <button
            key={label}
            role="menuitem"
            ref={(el) => (refs.current[i] = el)}
            // Only the active item is in the tab order (Roving Tabindex)
            tabIndex={i === active ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setActive((i + 1) % items.length);
              if (e.key === "ArrowLeft")
                setActive((i - 1 + items.length) % items.length);
              if (e.key === "Home") setActive(0);
              if (e.key === "End") setActive(items.length - 1);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

const Accessibility = () => <Menu items={menuItem} />;

export default Accessibility;
