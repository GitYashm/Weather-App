import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function Search({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "46afc0caeedf740c7763ee79f89bbec3";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${URL}?q=${city}&appid=${API_Key}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };
  let handleSearch = (event) => {
    setCity(event.target.value);
  };
  let handleCity = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo(); // call Function
      updateInfo(newInfo);
    } catch (err) {
      seterror(true);
    }
  };

  return (
    <div>
      <h3 className="heading">Search For a Wheather</h3>
      <form onSubmit={handleCity}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          color="primary"
          onChange={handleSearch}
        />
        <br />

        <Button className="btn" variant="contained" type="submit">
          Submit
        </Button>
      </form>
      {error && <p className="error">No Such City Exist</p>}
    </div>
  );
}
