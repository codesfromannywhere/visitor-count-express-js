import './App.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import eyeGif from "./images/icons8-sichtbar.gif"


function App() {

  const [visits, setVistis] = useState([]);
  // const [allvisits, setAllVistis] = useState([]);

  // "get" number of counted visitors

  useEffect(() => {
    const getVisits = async () => {
      const response = await axios.get('/visited')
      setVistis(response.data)
    }
    getVisits()
  }, []);



  // "get" number of all visitors

  // useEffect(() => {
  //   const getVisitsTotal = async () => {
  //     const response = await axios.get('/visited')
  //     setAllVistis(response.data)
  //   }
  //   getVisitsTotal()

  // }, []);
  // console.log(allvisits);





  return (
    <div className="App">
      <h1>eye count on you</h1>
      <div className='counterbar'>
        <div className='eyeGif'>
          <img src={eyeGif} alt="eye-gif" />
        </div>

        {visits.map((elt) => {
          return <p key={elt._id}>{elt.count}</p>
        })}

      </div>
    </div>
  );
}

export default App;
