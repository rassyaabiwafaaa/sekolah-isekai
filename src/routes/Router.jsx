import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/class-detail" element={<h2>Class Detail</h2>} />
        <Route path="/student-will-die" element={<h2>Student Will Die</h2>} />
        <Route path="/student-will-marry" element={<h2>Student Will Marry</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
