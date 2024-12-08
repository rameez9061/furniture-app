"use client"

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div
        className="navbar flex justify-between items-center px-4 py-4 bg-white shadow-md"
        style={{ height: "74px" }}
      >
        {/* Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <i className={`ri-${isMenuOpen ? "close" : "menu"}-line text-2xl`}></i>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`absolute md:relative bg-white md:bg-transparent left-0 top-[74px] md:top-0 w-full md:w-auto flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-0 transition-transform duration-300 md:transform-none ${
            isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <li className="list-none text-sm font-medium text-teal-600 md:text-gray-800 hover:text-teal-700">
            <Link href="/">Home</Link>
          </li>
          
          <li className="list-none text-sm font-medium hover:text-teal-700">
          <Link href="/AllProducts">Products</Link>
          </li>
          <li className="list-none text-sm font-medium hover:text-teal-700">
          <Link href="/Faq">FAQ</Link>
          </li>
          <li className="list-none text-sm font-medium hover:text-teal-700">
          <Link href="/Contact">Contact Us</Link>
          </li>
          <li className="list-none text-sm font-medium hover:text-teal-700">
          <Link href="/About">About</Link>
          </li>
        </ul>

        {/* Contact Info */}
        <div className="hidden md:block">
          <p className="text-sm font-light">
            Contact:{" "}
            <span className="font-medium text-gray-800">0300-1130040</span>
          </p>
        </div>
      </div>
    </>
  );
}
