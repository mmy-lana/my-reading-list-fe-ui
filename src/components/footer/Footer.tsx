import React from "react";
import NavbarFooterContainer from "../shared/NavbarFooterContainer";

const Footer: React.FC = () => {
  return (
    <NavbarFooterContainer>
      <div className="w-full h-full p-4">
        <div className="text-center">
          <p className="mb-2">
            <a href="/" className="hover:underline">
              Home
            </a>{" "}
            |{" "}
            <a href="/about" className="hover:underline">
              About
            </a>{" "}
            |{" "}
            <a href="/tech" className="hover:underline">
              Tech I Use
            </a>
          </p>
          <p className="text-sm mb-2">
            This site is a personal project for managing my reading list.
          </p>
          <p className="text-sm mb-2">
            © {new Date().getFullYear()} My Reading List. All Rights Reserved.
          </p>
        </div>
      </div>
    </NavbarFooterContainer>
  );
};

export default Footer;
