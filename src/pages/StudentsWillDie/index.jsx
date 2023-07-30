import React from "react";
import Layout from "../../components/Layout";
import CardStudentWillDie from "../../components/CardStudentWillDie";

export default function StudentsWillDie({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className="bg-secondary min-h-[89.2vh] px-10">
        <h1 className="text-white text-3xl font-bold text-center py-9">Students who will die this month</h1>

        {data.length !== 0 ? (
          <CardStudentWillDie data={data} />
        ) : (
          <div className="flex justify-center">
            <span className="text-white text-center">Loading data...</span>
          </div>
        )}
      </div>
    </Layout>
  );
}
