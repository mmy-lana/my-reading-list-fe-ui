import React, { ReactNode } from "react";
import { useTheme } from "../../utils/ThemeProvider"; // Adjust path as needed

interface NavbarFooterContainerProps {
  children: ReactNode;
}

const NavbarFooterContainer: React.FC<NavbarFooterContainerProps> = ({
  children,
}) => {
  const { theme } = useTheme(); // Get the theme directly

  return (
    <div
      className={`w-full text-text-primary py-4 shadow-card bg-background-secondary 
        dark:bg-backgroundDark-secondary dark:text-textDark-primary dark:shadow-card-dark
        ${theme === "dark" ? "bg-backgroundDark-secondary" : "bg-gray-300"}
      `}
    >
      <div className="w-3/4 mx-auto flex flex-col sm:flex-row items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default NavbarFooterContainer;
