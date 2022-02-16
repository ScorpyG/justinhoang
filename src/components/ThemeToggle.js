import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setDarkMode] = useState(false);
  var hobbiesCards = document.getElementsByClassName('hobbies-cards');

  // Add light theme
  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    for(var i = 0; i < hobbiesCards.length; i++) {
      hobbiesCards[i].style.backgroundColor = "#141414";
      hobbiesCards[i].style.boxShadow = "10px 10px 14px 2px rgba(100, 100, 100, 0.5)"
    }
  };

  // Remove light theme
  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    for(var i = 0; i < hobbiesCards.length; i++) {
      hobbiesCards[i].style.backgroundColor = "#ffffff";
      hobbiesCards[i].style.boxShadow = "10px 10px 14px 2px rgba(50, 50, 50, 0.5)";
    }
  };

  // Check local storage for page's theme
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme-color");
    if (currentTheme === "theme-dark") {
      enableDarkMode();
      setDarkMode(true);
    } else {
      disableDarkMode();
      setDarkMode(false);
    }
  }, []);

  // Toggle dark/light theme and change local storage
  const ChangeTheme = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      setDarkMode(false);
      disableDarkMode();
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      setDarkMode(true);
      enableDarkMode();
    }
  };

  // JSX Component
  return (
    // Icon style
    <div className="theme-btn">
      <i onClick={ChangeTheme} className={`${isDark ? 'fas fa-moon' : 'fas fa-sun'}`}/>
    </div>
    
    // Switch style
    // <label
    //   onClick={ChangeTheme}
    //   className={`${isDark ? "active" : null}`}
    // ></label>
  );
};

export default ThemeToggle;