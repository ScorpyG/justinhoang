import React from "react";
import { useState } from "react";

// Reset page position
function ScrollToTop() {
  window.scrollTo(0, 0);
}

// JSX Element & useState Function
const ToTop = () => {
  const [visible, setVisible] = useState(false);
  // Scroll detection
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
        document.getElementById("to-top-btn").classList.add("btnEnter");
        setVisible(true);
    } else {
        setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      id="to-top-btn"
      onClick={ScrollToTop}
      style={{ display: visible ? "inherit" : "none" }}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default ToTop;
