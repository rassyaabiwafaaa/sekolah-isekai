import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io";

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="font-sans flex flex-col text-left sm:flex-row sm:text-left sm:justify-between py-6 px-10 w-[100%] bg-secondary text-white">
      <div className="hidden md:block">
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
      <div className="flex items-center justify-between md:hidden">
        <Link href="/" className="text-3xl font-bold text-primary">
          Isescholl
        </Link>

        {active === true ? <IoClose className="text-[24px] cursor-pointer" onClick={() => setActive((prev) => !prev)} /> : <GiHamburgerMenu className="text-[24px] cursor-pointer" onClick={() => setActive((prev) => !prev)} />}
      </div>
      <ul className={`flex-col gap-2 mt-4 md:hidden ${active === true ? "flex" : "hidden"}`}>
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
