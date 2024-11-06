'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Service");
    const [isClient, setIsClient] = useState(false);

    // Ensure client-only state in useEffect to avoid SSR mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    if (!isClient) {
        return null;
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-6">
                <h1 className="text-2xl font-extrabold text-blue-700">Logist</h1>

                {/* Desktop Navigation */}
                <nav className="hidden space-x-6 md:flex">
                    {["Service", "Process", "Our Work", "About", "Contact"].map((link) => (
                        <a
                            key={link}
                            href="#"
                            onClick={() => setActiveLink(link)}
                            className={`relative text-gray-700 transition duration-300 hover:text-blue-700 ${activeLink === link ? "text-blue-700 font-semibold" : ""
                                }`}
                        >
                            {link}
                            {/* Underline on hover and active */}
                            <span
                                className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-700 transform scale-x-0 transition-transform duration-300 ${activeLink === link ? "scale-x-100" : ""
                                    }`}
                            />
                        </a>
                    ))}
                </nav>

                {/* Login Button for Desktop */}
                <button className="hidden md:block rounded-full bg-blue-600 px-6 py-2 text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg">
                    Login
                </button>

                {/* Mobile Menu Button (Font Awesome Icons) */}
                <button
                    className="block md:hidden text-blue-700"
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Navigation - Fullscreen Overlay */}
            <div
                className={`fixed inset-0 z-40 transform bg-white p-6 shadow-lg transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button inside Mobile Menu */}
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-extrabold text-blue-700">Logist</h1>
                    <button onClick={toggleMenu} className="text-blue-700">
                        <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
                    </button>
                </div>

                <ul className="space-y-4">
                    {["Service", "Process", "Our Work", "About", "Contact"].map((link) => (
                        <li key={link}>
                            <a
                                href="#"
                                onClick={() => {
                                    setActiveLink(link);
                                    setIsOpen(false);
                                }}
                                className={`block text-lg font-medium text-gray-700 transition duration-300 hover:text-blue-700 ${activeLink === link ? "text-blue-700 font-semibold" : ""
                                    }`}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                    <li>
                        <button className="w-full rounded-full bg-blue-600 py-2 text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
