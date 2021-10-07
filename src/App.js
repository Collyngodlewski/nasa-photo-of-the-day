import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import "./App.css";
import styled, { keyframes } from 'styled-components';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)
    .then(res => {
      console.log(res);
      setData(res.data);
      return data;
    }).catch(err =>{
      console.error(err);
    })
  }, [])


  const kf = keyframes`
  50%{
    transform: scale(0.8);
  }
  100%{
    opacity:1;
    transform: scale(1);
  }

  `

  const StyledHeader = styled.div`
    // background-color: black;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  
    //  transition, animation
     
    p{
      transform: scale(2);
      opacity: 0;
      animation: ${kf} 0.3s ease-in-out forwards;
    }
    
    img{
      animation: rotatelogo 3s;
    }
     
      @keyframes rotatelogo{
        from{ transform: rotate(0deg);}
        to{ transform: rotate(360deg);}
      }

    
        -webkit-animation: background 5s cubic-bezier(1,0,0,1) infinite;
        animation: background 5s cubic-bezier(1,0,0,1) infinite;  
      
      
      
      @-webkit-keyframes background {
        0% { background-color: #f99; }
        33% { background-color: #9f9; }  
        67% { background-color: #99f; }
        100% { background-color: #f99; }
      }
      
      @keyframes background {
        0% { background-color: #f99; }
        33% { background-color: #9f9; }  
        67% { background-color: #99f; }
        100% { background-color: #f99; }
      }

      .explan{
        align-text: center;
      }


  `
  






  // .App-header {
  //   background-color: #282c34;
  //   min-height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: center;
  //   font-size: calc(10px + 2vmin);
  //   color: white;
  // }


  return (
    // <div className="App">
    <StyledHeader>
      <p>
        Nasa's Photo of the Day! <span role="img" aria-label='go!'>🚀</span>
      </p>
      <p> Todays Date: {data.date}</p>
      <h1> Title: {data.title} </h1>
      <img src={`${data.url}`} />
      <p>{data.copyright}</p>
      <p>{data.explanation}</p>
      </StyledHeader>
  );
}

export default App;
