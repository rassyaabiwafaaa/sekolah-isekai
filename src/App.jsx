import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

// import constanta
import { classes } from "./const/index";

//import utils function
import { handleProcessData } from "./utils/handleProcessData";
import { handleGetStudentsToMarry } from "./utils/handleGetStudentsToMarry";
import { handleStudentDie } from "./utils/handleStudentDie";
import Router from "./routes/Router";

function App() {
  // state for store data from API
  const [data, setData] = useState([]);

  // useEffect for getting data from API
  useEffect(() => {
    axios
      .get(`https://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT/`)
      .then((response) => {
        // Handle success (response data will be in 'response.data')

        // create variable for names
        const names = response.data.listNama;
        // create variable for score
        const scores = response.data.listNilai;

        // combine names and score to be an array of object
        const students = names.map((name, index) => ({ name, score: scores[index] }));

        // set data
        setData(students);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  return (
    <>
      <Router data={handleProcessData(classes, data)} studentDieData={handleStudentDie(classes)} studentMarryData={handleGetStudentsToMarry(classes)} />
    </>
  );
}

export default App;
