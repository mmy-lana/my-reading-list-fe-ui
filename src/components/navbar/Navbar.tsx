import React from "react";
import { useTheme } from "../../utils/ThemeProvider"; // Import useTheme
import Toggle from "../button/toggle/Toggle";
import { icons } from "../../assets/icons";
import NavbarFooterContainer from "../shared/NavbarFooterContainer";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <NavbarFooterContainer>
      <a
        href="/"
        className="text-3xl font-bold text-primary dark:text-textDark-primary"
      >
        My Reading List
      </a>
      <Toggle
        label={isDarkMode ? "Dark" : "Light"}
        iconSrc={isDarkMode ? icons.lightBulbOff : icons.lightBulbOn}
        onClick={toggleTheme} // Toggle theme using ThemeProvider
      />
    </NavbarFooterContainer>
  );
};

export default Navbar;
