import axios from "axios";
import { useState } from "react";
import styled from "styled-components"
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";


const API_key ="a1b70d7d5a72614fe53a1a2231e18157";
const Container = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #4682B4;
  padding: 40px 20px;
  border-radius: 25px;
  width: 380px;
  background: white;
`;

const AppLabel = styled.span `
  color: black;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity]=useState ();
  const [weather, updateWeather] = useState ();
  
  const fetchWeather = async (e) => {
    e.preventDefault ();
   const response = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
   updateWeather (response.data);
  
  };
  return (
    <Container>
      <a href="" style={{textDecoration:"none"}} ><AppLabel>Weather Mapping</AppLabel></a><br /><br />
   {weather? (
    <WeatherComponent weather={weather} />
   ) : (
   <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
   )} 
   </Container>
  );
}

export default App;
