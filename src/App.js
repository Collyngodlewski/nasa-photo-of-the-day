import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=FMeMhmd5QQbtlFm8JbfdBHNI8HD3qhrIPdsV52PP`)
    .then(res => {
      console.log(res);
      setData(res.data);
      return data;
    }).catch(err =>{
      console.error(err);
    })
  }, [])





  return (
    <div className="App">
      <p>
        Ooooo pretty space! <span role="img" aria-label='go!'>🚀</span>
      </p>
      <img src={`${data.url}`} />
      <p>{data.copyright}</p>
    </div>
  );
}

export default App;
