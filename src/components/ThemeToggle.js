import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setDarkMode] = useState(false);
  // const btnDark = document.body.getElementsByClassName("button");

  // Add light theme
  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    // for (let i = 0; i < btnDark.length; i++) {
    //   btnDark[i].classList.add("btn-darkmode");
    // }
  };

  // Remove light theme
  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    // for (let i = 0; i < btnDark.length; i++) {
    //   btnDark[i].classList.remove("btn-darkmode");
    // }
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
    // console.log("Button Clicked");
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

  //   window.addEventListener("onload", );
  return (
    <label
      onClick={ChangeTheme}
      className={`${isDark ? "active" : null}`}
    ></label>
  );
};

export default ThemeToggle;