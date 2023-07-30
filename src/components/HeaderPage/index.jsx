import React from "react";

export default function HeaderPage({ title, desc }) {
  return (
    <div className="h-[300px] flex flex-col justify-center items-center">
      <div className="mt-20">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <p className="text-white mt-5 md:w-[900px]">{desc}</p>
      </div>
      <div className="h-[4px] bg-[#888] w-full mt-20"></div>
    </div>
  );
}
