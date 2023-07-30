import React from "react";
import Layout from "../../components/Layout";
import CardStudentWillDie from "../../components/CardStudentWillDie";
import HeaderPage from "../../components/HeaderPage";

export default function StudentsWillDie({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className="bg-secondary min-h-[89.2vh] px-10">
        <div className="text-center">
          <HeaderPage
            title={`Student Will Die`}
            desc={`The datas is the data of students who will die this month. the data is taken from the value of students who get Examination Scores
Primes`}
          />
        </div>

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
