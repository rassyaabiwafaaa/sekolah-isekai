import React, { useState } from "react";
import Layout from "../../components/Layout";
import CardClassDetail from "../../components/CardClassDetail";
import Notes from "../../components/Notes";
import HeaderPage from "../../components/HeaderPage";

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
        <HeaderPage
          title={`Class List`}
          desc={`The data are data from all students who have been distributed according to groups, the division of groups according to the number tens in the value, also special class is a class that students who have letter eiter 'O' or
              'C' and the score that is divisible by 7.`}
        />

        <div className="flex justify-center md:justify-between flex-wrap gap-16 mt-10">
          {kelas5.length !== 0 ? <CardClassDetail key={"kelas 5"} data={kelas5} className={"Class 5"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas6.length !== 0 ? <CardClassDetail key={"kelas 6"} data={kelas6} className={"Class 6"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas7.length !== 0 ? <CardClassDetail key={"kelas 7"} data={kelas7} className={"Class 7"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas8.length !== 0 ? <CardClassDetail key={"kelas 8"} data={kelas8} className={"Class 8"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelas9.length !== 0 ? <CardClassDetail key={"kelas 9"} data={kelas9} className={"Class 9"} /> : <span className="text-white text-center">Loading data...</span>}
          {kelasKhusus.length !== 0 ? <CardClassDetail key={"kelas khusus"} data={kelasKhusus} className={"Special Class"} /> : <span className="text-white text-center">Loading data...</span>}
        </div>

        {/* Notes */}
        <Notes notes={"scrollable table"} />
      </div>
    </Layout>
  );
}
