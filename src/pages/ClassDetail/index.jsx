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

  console.log(kelasKhusus);

  return (
    <Layout>
      <div className="bg-secondary px-10 text-center">
        <div className="flex justify-between flex-wrap gap-16">
          <CardClassDetail data={kelas5} className={"Class 5"} />
          <CardClassDetail data={kelas6} className={"Class 6"} />
          <CardClassDetail data={kelas7} className={"Class 7"} />
          <CardClassDetail data={kelas8} className={"Class 8"} />
          <CardClassDetail data={kelas9} className={"Class 9"} />
          <CardClassDetail data={kelasKhusus} className={"Special Class"} />
        </div>

        {/* Notes */}
        <Notes notes={"The data above is data from all students who have been distributed according to groups, the division of groups according to the number tens in the value."} />
      </div>
    </Layout>
  );
}
