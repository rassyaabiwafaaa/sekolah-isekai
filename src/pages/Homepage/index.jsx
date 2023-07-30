import React from "react";
import Layout from "../../components/Layout";

import "./index.css";

export default function Homepage() {
  return (
    <>
      <Layout>
        <div className="bg-secondary min-h-[89.2vh] text-white homepage">
          <div className="flex flex-col justify-center items-center h-[89vh] text">
            <h1 className="text-center font-bold text-5xl">Welcome, to Isekai School</h1>
            <p className="text-center mt-8">
              in this website, you can see all the detail classes, who the students will <span className="text-primary font-bold">die</span> this months, and who student who <span className="text-pink-600 font-bold">marry</span>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
