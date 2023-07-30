import React from "react";
import Layout from "../../components/Layout";
import CardStudentWillMarry from "../../components/CardStudentWillMarry";
import HeaderPage from "../../components/HeaderPage";

export default function StudentWillMarry({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className="bg-secondary px-10 min-h-[89.2vh]">
        <div className="text-center">
          <HeaderPage
            title={`Student Will Marry`}
            desc={`The datas where filled in by students who have names with
the letters "C", and "O". Then the student has a value that is divisible by 7`}
          />
        </div>

        {data.length !== 0 ? (
          <CardStudentWillMarry data={data} />
        ) : (
          <div className="flex justify-center">
            <span className="text-white text-center">Loading data...</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
