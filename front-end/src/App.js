import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [visits, setVistis] = useState([]);

  // useEffect(() => {
  //   axios.get("/visit").then(({ data }) => setVistis(data));
  // }, []);


  useEffect(() => {
    const getVisits = async () => {
      const response = await axios.get('/visit')
      setVistis(response.data)
    }
    getVisits()
  }, []);
  console.log(visits);

  return (
    <div className="App">
      <h1>I count on you!</h1>


      <div >
        <p>{visits}</p>
      </div>
    </div>
  );
}

export default App;
