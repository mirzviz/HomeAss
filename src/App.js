import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
const axios = require("axios");

function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(
        "https://api.ipdata.co?api-key=b0b8cd08bd4c1824cd4df64ab44f6975fc71e6ba25914603fe048c61"
      )
      .then(res => {
        console.log(res.data.country_name, res.data.city);
        setCountry(res.data.country_name);
        setCity(res.data.city);
      })
      .catch(err => console.log(err));
  };

  let url = `https://www.google.com/maps/embed/v1/place?q=${country}+${city}&key=AIzaSyCdQymwSuF0P6Ee-ffX0ZtWjpJdpaT5eLk`;
  return (
    <div className="App">
      {city && country && (
        <>
          <h3 className="div">Country: {country} ,City: {city}</h3>
          <iframe width="600" height="450" src={url}></iframe>
        </>
      )}
    </div>
  );
}

export default App;
