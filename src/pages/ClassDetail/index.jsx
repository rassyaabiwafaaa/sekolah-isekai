import React, { useState } from "react";
import Layout from "../../components/Layout";

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
      <div className="min-h-[89.2vh] bg-secondary">
        <div className="relative overflow-x-auto mx-20">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">1</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
