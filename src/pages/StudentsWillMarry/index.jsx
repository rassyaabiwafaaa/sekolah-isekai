import React from "react";
import Layout from "../../components/Layout";
import CardStudentWillMarry from "../../components/CardStudentWillMarry";

export default function StudentWillMarry({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className="bg-secondary px-10 min-h-[89.2vh]">
        <h1 className="text-white text-3xl font-bold text-center py-9">Students who will die this month</h1>

        <CardStudentWillMarry data={data} />
      </div>
    </Layout>
  );
}
