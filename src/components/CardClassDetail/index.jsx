import React from "react";
import "./index.css";

export default function CardClassDetail({ data, className }) {
  return (
    <section className="py-5">
      <div className="text-white text-4xl mb-5 text-center">{className}</div>
      <div className="overflow-x-auto overflow-y-auto h-[400px]">
        <table className="text-sm text-left text-black w-[400px] h-[400px]">
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
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr className="bg-white border-b border-gray-700">
                <td className="px-6 py-4">{index + 1}</td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
