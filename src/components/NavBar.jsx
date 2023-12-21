import React, { useState } from "react";
import NavbarHover from "./NavbarHover";
import { Link } from "react-scroll";

export const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

    
  return (
    <section>
        <div className="container mx-auto flex justify-between items-center">
            <img src="https://comebi.mx/casas-comebi-blanco/" alt="" className="w-auto h-24" />

            <div className="lg:flex">
                    <nav id="navbar" className="hidden lg:flex">
                        <ul className="flex [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 cursor-pointer">
                            <li>
                                <Link
                                to="inicio"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                >
                                Inicio
                                </Link>  
                            </li>
                            <li>
                                <Link
                                to="contacto"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                >
                                Contacto
                                </Link>    
                            </li>
                            <li>
                                <Link
                                to="nosotros"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                >
                                Nosotros
                                </Link>  
                            </li>
                            <li>
                                <Link
                                to="ciudades"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                >
                                Ciudades
                                </Link>  
                            </li>
                            <li>
                                <Link
                                to="reseñas"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                >
                                Reseñas
                                </Link>  
                            </li>
                            <li>
                                <Link
                                to="faq"
                                spy={true}
                                smooth={true}
                                duration={1000}
                                >
                                FAQ
                                </Link>  
                            </li>
                        </ul>
                    </nav>

                    <div id="menu-backdrop" className="absolute bg-white backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)] transition-all duration-500 ease-in-out opacity-0 -z-10"></div>

                    <nav className="flex items-center justify-center space-x-4">
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg></a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg></a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg></a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg></a>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg></a>
                    </nav>
            </div>

            <nav className="flex items-center justify-center space-x-4 lg:hidden">
                <button id="toggleButton" className="text-gray-600 focus:outline-none" onClick={toggleMobileMenu}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </nav>
        </div>

        <div id="mobileMenu"  className={`lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${mobileMenuOpen ? "" : "hidden"}`}>
            <div className="flex items-center justify-end p-4">
                <button id="closeButton" className="text-white focus:outline-none" onClick={closeMobileMenu}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-center">
                <Link
                to="inicio"
                spy={true}
                smooth={true}
                duration={1000}
                className="py-2"
                onClick={closeMobileMenu}
                >
                Inicio
                </Link>
                <Link
                to="contacto"
                spy={true}
                smooth={true}
                duration={1000}
                className="py-2"
                onClick={closeMobileMenu}
                >
                Contacto
                </Link>
                <Link
                to="nosotros"
                spy={true}
                smooth={true}
                duration={1000}
                className="py-2"
                onClick={closeMobileMenu}
                >
                Nosotros
                </Link>
                <Link
                to="ciudades"
                spy={true}
                smooth={true}
                duration={1000}
                className="py-2"
                onClick={closeMobileMenu}
                >
                Ciudades
                </Link>
                <Link
                to="reseñas"
                spy={true}
                smooth={true}
                duration={1000}
                className="py-2"
                onClick={closeMobileMenu}
                >
                Reseñas
                </Link>
                <Link
                to="faq"
                spy={true}
                smooth={true}
                duration={1000}
                className="py-2"
                onClick={closeMobileMenu}
                >
                FAQ
                </Link>
            </div>
        </div>
        

        <NavbarHover />
    </section>    
  );
}