import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // state for store data from API
  const [data, setData] = useState([]);

  // useEffect for getting data from API
  useEffect(() => {
    axios
      .get("http://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT")
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
      <h2>Sekolah Isekai</h2>
    </>
  );
}

export default App;
