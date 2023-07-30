import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

export default function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-left sm:flex-row sm:text-left sm:justify-between py-6 px-10 w-[100%] bg-secondary text-white">
      <div className="mb-2 sm:mb-0">
        <Link href="/" className="text-2xl font-bold text-primary">
          Home
        </Link>
      </div>
      <ul className="flex flex-col sm:flex-row justify-end sm:gap-10 w-full">
        <li>
          <Link to={"/class-detail"}>Classes</Link>
        </li>
        <li>
          <Link to={"/student-will-die"}>Student Who Will Die</Link>
        </li>
        <li>
          <Link to={"/student-will-marry"}>Student Who Will Marry</Link>
        </li>
      </ul>
    </nav>
  );
}
