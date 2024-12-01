import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center space-x-6">
        <li className="text-white font-semibold hover:underline" to="/">
          Home
        </li>
        <li className="text-white font-semibold hover:underline" to="/">
          About
        </li>
        <li className="text-white font-semibold hover:underline" to="/">
          Download
        </li>
      </ul>
    </nav>
  );
}
