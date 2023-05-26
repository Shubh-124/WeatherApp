import React, { useState } from 'react'
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Result from "./components/Result"
import axios from "axios";
export default function WeatherApp() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  const [img, setImg] = useState('images/default.jpg');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(0);

  const setSearchEvent = (value) => {
    setSearch(value);
  }



  //'https://api.openweathermap.org/data/2.5/weather?q={search}&appid=c7d9591a4d8c2a727d54e13319d7dcce'
  const searchWeatherHandler = () => {
    setLoading(0);
    if (search !== "") {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=737e60ae1c6b0e63815b6c5edc4a2685&units=metric`)
        .then(

          (response) => {
            console.log(response.data);
            setWeather(response.data);
            const randomImg = generateRandomImg();
            setImg(randomImg);
            setSearch("");
            console.log(img);
            setLoading(2);
            // console.log(loading);

          }
        ).catch(
          (error) => {
            console.log(error);
            setLoading(1);
          }
        )
    }
  }
  const generateRandomImg = () => {
    // Generate a random Image value
    const val = Math.floor(Math.random() * 10);

    return `images/img${val}.jpg`;
  };


  return (
    <div className="main p-6" style={{
      backgroundImage: `url(${img})`,
      minHeight: '100vh'
    }}>

      < Search val={search} eventChange={setSearchEvent} searchWeather={searchWeatherHandler} weatherData={weather} results={result} setResults={setResult} />
      <Dropdown results={result} eventChange={setSearchEvent} setResults={setResult} />
      <Result weatherData={weather} loading={loading} />

    </div>
  )
}