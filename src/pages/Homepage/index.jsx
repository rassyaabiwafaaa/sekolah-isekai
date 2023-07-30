import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <nav className="bg-tertier py-4">
        <ul className="flex justify-center content-between gap-24 font-medium">
          <li>
            <Link to={"/class-detail"}>Kelas</Link>
          </li>
          <li>
            <Link to={"/student-will-die"}>Student Who Will Die</Link>
          </li>
          <li>
            <Link to={"/student-will-marry"}>Student Who Will Marry</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2>Homepage</h2>
      </div>
    </>
  );
}
