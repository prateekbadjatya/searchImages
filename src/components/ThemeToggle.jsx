import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from "../context";

const ThemeToggle = () => {
  const { theme, handleOnChangeTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button
        className="dark-toggle"
        onClick={() =>
          theme === "light"
            ? handleOnChangeTheme("dark")
            : handleOnChangeTheme("light")
        }
      >
        {theme === "dark" ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
