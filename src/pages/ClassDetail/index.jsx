import React, { useState } from "react";
import Layout from "../../components/Layout";
import CardClassDetail from "../../components/CardClassDetail";
import Notes from "../../components/Notes";

export default function ClassDetail({ data }) {
  // Split data to state
  const [kelas5, setKelas5] = useState(data["Kelas 5"]);
  const [kelas6, setKelas6] = useState(data["Kelas 6"]);
  const [kelas7, setKelas7] = useState(data["Kelas 7"]);
  const [kelas8, setKelas8] = useState(data["Kelas 8"]);
  const [kelas9, setKelas9] = useState(data["Kelas 9"]);
  const [kelasKhusus, setKelasKhusus] = useState(data["Kelas Khusus"]);
  return (
    <Layout>
      <div className="bg-secondary px-10 text-center min-h-[89.2vh]">
        {/* title */}
        <div>
          <h1 className="text-white text-4xl font-bold">Class List</h1>
          <p className="text-white mt-5">Below are datas from all classes that have been grouped according to class</p>
          <Notes notes={`scrollable table`} />
        </div>
        <div className="flex justify-center md:justify-between flex-wrap gap-16">
          {kelas5.length !== 0 ? <CardClassDetail data={kelas5} className={"Class 5"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas6.length !== 0 ? <CardClassDetail data={kelas6} className={"Class 6"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas7.length !== 0 ? <CardClassDetail data={kelas7} className={"Class 7"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas8.length !== 0 ? <CardClassDetail data={kelas8} className={"Class 8"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas9.length !== 0 ? <CardClassDetail data={kelas9} className={"Class 9"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelasKhusus.length !== 0 ? <CardClassDetail data={kelasKhusus} className={"Class Khusus"} /> : <span className="text-white text-center">Loading data...</span>}
        </div>

        {/* Notes */}
        <Notes
          notes={
            "The data above is data from all students who have been distributed according to groups, the division of groups according to the number tens in the value, also special class is a class that students who have letter eiter 'O' or 'C' and the score that is divisible by 7."
          }
        />
      </div>
    </Layout>
  );
}
