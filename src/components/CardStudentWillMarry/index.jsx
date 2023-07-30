import React from "react";

export default function CardStudentWillMarry({ data }) {
  return (
    <div className="flex justify-center pb-20">
      <table className="text-sm text-left text-black w-[600px] h-[20px] overflow-y-auto">
        <thead className="text-xs uppercase bg-black text-white border border-white shadow">
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
            <th scope="col" className="px-6 py-3">
              Note
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            data.length !== 0 ? (
              <tr className="bg-white border-b border-gray-700">
                <td className="px-6 py-4">{index + 1}</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.score}</td>
                <td className="px-6 py-4">This student will marry this month</td>
              </tr>
            ) : (
              <span className="text-white">Data loading or data is not exist</span>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
