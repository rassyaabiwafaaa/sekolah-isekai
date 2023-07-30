import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-left sm:flex-row sm:text-left sm:justify-between py-6 px-10 w-[100%] bg-secondary text-white">
      <div className="">
        <Link href="/" className="text-3xl font-bold text-primary">
          Isescholl
        </Link>
      </div>
      <ul className="hidden md:flex md:flex-row md:justify-end md:gap-10 md:w-full">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
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

      {/* Responsive */}
      <div>
        <Link href="/" className="text-3xl font-bold text-primary">
          Isescholl
        </Link>

        <GiHamburgerMenu />
      </div>
      <ul className="md:hidden sm:flex sm:flex-col sm:gap-10 py-3">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
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
