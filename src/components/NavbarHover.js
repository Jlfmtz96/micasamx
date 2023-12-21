// NavbarHover.jsx
import React, { useEffect } from 'react';

const NavbarHover = () => {
  useEffect(() => {
    const handleNavbarHover = (event) => {
      const navbar = document.getElementById("navbar");
      const menuBackdrop = document.getElementById("menu-backdrop");

      if (!navbar || !menuBackdrop) return;

      const target = event.target;
      if (target.tagName === "A" && target.parentElement.tagName === "LI") {
        const { left, top, width, height } = target.getBoundingClientRect();
        menuBackdrop.style.setProperty("--left", `${left}px`);
        menuBackdrop.style.setProperty("--top", `${top}px`);
        menuBackdrop.style.setProperty("--width", `${width}px`);
        menuBackdrop.style.setProperty("--height", `${height}px`);
        menuBackdrop.style.opacity = "0.7";
        menuBackdrop.style.visibility = "visible";
      }
    };

    const handleNavbarMouseOut = () => {
      const menuBackdrop = document.getElementById("menu-backdrop");
      if (menuBackdrop) {
        menuBackdrop.style.opacity = "0";
        menuBackdrop.style.visibility = "hidden";
      }
    };

    const navbar = document.getElementById("navbar");
    navbar.addEventListener("mouseover", handleNavbarHover);
    navbar.addEventListener("mouseout", handleNavbarMouseOut);

    return () => {
      navbar.removeEventListener("mouseover", handleNavbarHover);
      navbar.removeEventListener("mouseout", handleNavbarMouseOut);
    };
  }, []);

  return null; // El componente no renderiza nada directamente
};

export default NavbarHover;
