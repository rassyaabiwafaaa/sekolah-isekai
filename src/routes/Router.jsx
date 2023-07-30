import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "../pages";
import ClassDetail from "../pages/ClassDetail";
import StudentsWillDie from "../pages/StudentsWillDie";
import StudentWillMarry from "../pages/StudentsWillMarry";

export default function Router({ data, studentDieData, studentMarryData }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/class-detail" element={<ClassDetail data={data} />} />
        <Route path="/student-will-die" element={<StudentsWillDie data={studentDieData} />} />
        <Route path="/student-will-marry" element={<StudentWillMarry data={studentMarryData} />} />
      </Routes>
    </BrowserRouter>
  );
}
