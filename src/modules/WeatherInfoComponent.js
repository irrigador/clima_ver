import styled from 'styled-components'

export const WeatherInfoIcons = {
    Sunset: "/icon/temp.svg",
    Sunrise: "/icon/temp.svg",
    Humidity: "/icon/humidity.svg",
    Wind: "/icon/wind.svg",
    Pressure: "/icon/pressure.svg",
};

export const WeatherIcons = {
    "01d": "/icon/sunny.svg",
    "01n": "/icon/night.svg",
    "02d": "/icon/day.svg",
    "02n": "/icon/cloudy-night.svg",
    "03d": "/icon/cloudy.svg",
    "03n": "/icon/cloudy.svg",
    "04d": "/icon/perfect-day.svg",
    "04n": "/icon/cloudy-night.svg",
    "09d": "/icon/rain.svg",
    "09n": "/icon/rain-night.svg",
    "10d": "/icon/rain.svg",
    "10n": "/icon/rain-night.svg",
    "11d": "/icon/storm.svg",
    "11n": "/icon/storm.svg",
}

const WeatherCondition=styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 30px auto;
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
& span {
    font-size: 28px;  
}`;

const WeatherLogo =styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;


const Location = styled.span `
    font-size: 28px;
    font-weight: bold;
    
`;

const WeatherInfoLabel = styled.span `
    font-size: 14px;
    font-weight: bold;
    margin: 20px 25px 10px;
    text-align: start;
    width: 90%;
`;

const WeatherInfoContainer = styled.div `
    display: flex;
    width: 90%
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`;

const InfoContainer = styled.div `
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const InfoIcon = styled.img `
    width: 36px;
    height: 36px
    `;
const InfoLabel = styled.span `
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;
    & span {
        font-size: 12px;
        text-transform: capitalize;
    }`;   


const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src ={ WeatherInfoIcons [name] }/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    ); }
    
const WeatherComponent = (props) => {
    const { weather } = props;
    const isDay = weather.weather[0].icon.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes}`
    }
    
    
    return <>
    <WeatherCondition>
        <Condition> 
            <span>{`${Math.floor(weather.main.temp - 273)} ºC`}
            </span>
        {` |  ${weather.weather[0].description}`}</Condition>
     <div class="zoom">  <WeatherLogo src={WeatherIcons[weather.weather[0].icon]}/> </div> 
    </WeatherCondition>
    <Location>{`${weather.name},  ${weather.sys.country} `}</Location>
    <WeatherInfoLabel>Info *</WeatherInfoLabel>
    <WeatherInfoContainer>
        
        <WeatherInfoComponent name="Sunrise" value={weather.sys.sunset}/>
        <WeatherInfoComponent name="Humidity" value={weather.main.humidity}/>
        <WeatherInfoComponent name="Wind" value={weather.wind.speed}/>
        <WeatherInfoComponent name="Pressure" value={weather.main.pressure}/>
        
    </WeatherInfoContainer>
    </>;
}; 

export default WeatherComponent;