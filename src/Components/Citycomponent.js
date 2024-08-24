import React, { useState } from "react";
import axios from "axios";

function Citycomponent() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  console.log(city);
  console.log(result);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
      )
      .then((response) => {
        const kelvin = response.data.main.temp;
        const celcius = kelvin - 273.15;
        setResult("Temparature At" + " " + city + " " + Math.round(celcius));
        setError("");
      })
      .catch((error) => {
        console.error("error in fetching data", error);
        setError("city not found ...please enter valid city name");
      });
  };

  return (
    <div className="card-container">
      <div className="card-head mt-3">
        <h4>React Wether App</h4>
      </div>

      <div className="Card-img-box mt-4">
        <img src="./Assets/Sunny.png" alt="" />
      </div>
      <div className="card-content  mt-5">
        <h6>
          <mark>Find Wether Of Your City</mark>
        </h6>
      </div>
      <div className="weather-search">
        <input
          type="text"
          name="searchcity"
          id="searchcity"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="searchbtn" onClick={submitHandler}>
          search
        </button>
      </div>
      {error ? (
        <h6 className="mt-4 text-danger">
          {" "}
          <mark>{error} </mark>{" "}
        </h6>
      ) : (
        result && (
          <h5 className="mt-4 text-danger">
            {" "}
            <mark>{result} </mark>{" "}
          </h5>
        )
      )}
    </div>
  );
}

export default Citycomponent;
