import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import snowicon from "./assets/snow.svg"
import sunicon from "./assets/clear_day.svg"
import rainicon from "./assets/rain.svg"
import cloudicon from "./assets/cloud.svg"

export default function TestBlock() {
    const [city, setCity] = useState('Wooster');
    const [weatherData, setWeatherData] = useState(null);
    const [inputValue, setInputValue] = useState(''); 

    useEffect(() => {
        // fetch weather data from api
        const fetchData = async () => {
            const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=JYANY48SJE9QHGN9YBNCWFCKM`;
            try {
                const response = await axios.get(url);
                setWeatherData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [city]);

    function handleInputChange(e) {
        setInputValue(e.target.value); // Update input value when typing
    }

    function handleChangeCity(e) {
        e.preventDefault(); 
        setCity(inputValue); // Update the city state with the input value when the button is pressed
    }

    // constants to display 
    const temp = weatherData?.currentConditions?.temp;
    const humidity = weatherData?.currentConditions?.humidity;
    const tempMax = weatherData?.days[0].tempmax;
    const tempMin = weatherData?.days[0].tempmin;
    const description = weatherData?.days[0].description;
    const weather = weatherData?.days[0].icon;
    console.log(weather)
    
    return (
        <div className='page'>
            <div className='cardContainer'>
                <div className="card">
                    <div className="city">
                        {city}
                    </div>
                    <div className="weather">
                        {weather === "snow" ? <img className='icon' src={snowicon} alt=""/>
                        : weather === "partly-cloudy-day" ? <img className='icon' src={cloudicon} alt=""/>
                        : weather === "cloud" ? <img className='icon' src={cloudicon} alt=""/>
                        : weather === "rain" ? <img className='icon' src={rainicon} alt=""/>
                        : <img className='icon' src={sunicon} alt=""/>}
                    </div>
                    <div className="temp">{temp}</div>
                    <div className="minmaxContainer">
                        <div class="min">
                            <p class="minHeading">Min</p>
                            <p class="minTemp">{tempMin}</p>
                        </div>
                        <div class="max">
                            <p class="maxHeading">Max</p>
                            <p class="maxTemp">{tempMax}</p>
                        </div>
                    </div>
                    <div className="humidityContainer">
                        <p class="humidityHeading">Humidity(%):</p>
                        <p className='humidity'>{humidity}</p> 
                    </div>
                    <div className="discription">
                        <p>Note: {description} </p>
                    </div>
        
                </div>
            </div>
            <form onSubmit={handleChangeCity}>
                <div className="search">
                    <input
                        type="text"
                        className='search_input'
                        value={inputValue} // Bind to local input state
                        onChange={handleInputChange} // Update local input state
                        placeholder="enter city"
                    />
                    <button className='search_button' type="submit">Search</button>
                </div>
                
            </form>
        </div>
    );
}

