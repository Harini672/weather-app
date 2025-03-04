import { useState } from 'react'

import './App.css'
import clear from "./assets/clear.jpeg"
import cloudy from "./assets/cloudy.jpeg"
import rain from "./assets/rain.jpeg" 
import snow from  "./assets/snow.jpeg"
import drizzle from "./assets/drizzle.jpeg"
import humidity from "./assets/humidity.jpeg"
import windy from "./assets/windy.jpeg"
import search from"./assets/search.png"
const WeatherDetails=({icon,temp,city,country,lat,log,humidity,wind})=>{
  return(
    <>
  <div className="image">
    <img src={icon} alt="clear"/>
    </div>
    <div className="temp">{temp}
      °C
    </div>
    <div className="location">
      {city}
    </div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className="lat">Lattitude

        </span>
        <span>{lat}</span>
      </div>
      <div>
        <span className="log">Longitude</span>
        <span>{log}</span>
      </div>
    </div>
    <div className="data-container">
      <div className="element">
        <img src={humidity} alt="Humidity" className="icon"/>
        <div className="data">
          <div className="humidity-percent">{humidity} %
          </div>
          <div className="text">Humidity</div>
        </div>

      </div>
      <div className="element">
        <img src={windy} alt="wind" className="icon"/>
        <div className="data">
          <div className="wind-percent">{wind} km/h</div>
          <div className="text">Wind Speed</div>
        </div>

      </div>
    </div>
    </>

  )
}
function App() {
  const [icon,setIcon]=useState(snow);
  const [temp,setTemp]=useState(0);
  const[city,setCity]=useState("Chennai");
  const[country,setCountry]=useState("IND");
  const[lat,setLat]=useState(0);
  const[log,setLog]=useState(0);
  const[humidity,setHumidity]=useState(0);
  const[wind,setWind]=useState(0);


  return (
    <>
      <div className="container">
        <div className="input-container">

          <input type="text" className="cityInput"
          placeholder="Search City"/>
          <div className="search-icon">
            <img src={search} alt="search"/>
</div>

        </div>
        <WeatherDetails icon={icon} temp={temp} city={city} country={country}
         lat={lat} log={log} humidity={humidity} wind={wind}/>
        
      </div>
      
      
    </>
  )
}

export default App
