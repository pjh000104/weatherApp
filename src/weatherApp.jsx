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
    const [Fahrenheit, setFahrenheit] = useState(true) 

    // useEffect(() => {
    //     // fetch weather data from api
    //     const fetchData = async () => {
    //         const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=JYANY48SJE9QHGN9YBNCWFCKM`;
    //         try {
    //             const response = await axios.get(url);
    //             setWeatherData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, [city]);

    useEffect(() => {
        // fetch weather data from api
        const fetchData = async () => {
            const url = `https://springbootweatherapi.onrender.com/weather?location=${city}`;
            try {
                const response = await axios.get(url);
                setWeatherData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
        // console.log(weatherData)
    }, [city]);

    function handleInputChange(e) {
        setInputValue(e.target.value); // Update input value when typing
    }

    function handleChangeCity(e) {
        e.preventDefault(); 
        setCity(inputValue); // Update the city state with the input value when the button is pressed
    }
    
    function changeFtoC(temp) {
        return (((temp-32) *5)/9).toFixed(2)
    }

    function changeFarenheit() {
        setFahrenheit(!Fahrenheit);
    }
    // constants to display 
    const temp = weatherData?.currentConditions?.temp;
    const humidity = weatherData?.currentConditions?.humidity;
    const tempMax = weatherData?.days[0].tempmax;
    const tempMin = weatherData?.days[0].tempmin;
    const description = weatherData?.days[0].description;
    const weather = weatherData?.days[0].icon;
    
    const weatherInfo = {
        temp: { f: weatherData?.currentConditions?.temp, c: changeFtoC( weatherData?.currentConditions?.temp)},
        humidity: weatherData?.currentConditions?.humidity,
        tempMax: { f: weatherData?.days[0].tempmax, c: changeFtoC(weatherData?.days[0].tempmax) },
        tempMin: { f: weatherData?.days[0].tempmin, c: changeFtoC(weatherData?.days[0].tempmin) },
        description: weatherData?.days[0].description,
        icon: weatherData?.days[0].icon
    };
    return (
        <div className='page'>
            <div className='cardContainer'>
                <div className="card">
                    <div className="city">
                        {city}
                    </div>
                    <div className="weather">
                        {weatherInfo.icon === "snow" ? <img className='icon' src={snowicon} alt=""/>
                        : weatherInfo.icon === "partly-cloudy-day" ? <img className='icon' src={cloudicon} alt=""/>
                        : weatherInfo.icon === "cloud" ? <img className='icon' src={cloudicon} alt=""/>
                        : weatherInfo.icon === "rain" ? <img className='icon' src={rainicon} alt=""/>
                        : <img className='icon' src={sunicon} alt=""/>}
                    </div>
                    <div className="temp">
                        {Fahrenheit ? weatherInfo.temp.f : weatherInfo.temp.c}°{Fahrenheit ? "F" : "C"}
                    </div>
                    <div className="minmaxContainer">
                        <div class="min">
                            <p class="minHeading">Min</p>
                            <p class="minTemp">{Fahrenheit ? weatherInfo.tempMin.f: weatherInfo.tempMin.c}°{Fahrenheit ? "F" : "C"}</p>
                        </div>
                        <div class="max">
                            <p class="maxHeading">Max</p>
                            <p class="maxTemp">{Fahrenheit ? weatherInfo.tempMax.f: weatherInfo.tempMax.c}°{Fahrenheit ? "F" : "C"}</p>
                        </div>
                    </div>
                    <div className="humidityContainer">
                        <p class="humidityHeading">Humidity(%):</p>
                        <p className='humidity'>{weatherInfo.humidity}</p> 
                    </div>
                    <div className="discription">
                        <p>Note: {weatherInfo.description} </p>
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
                    <button className='c/f' onClick={changeFarenheit} type="button">Change Metrics</button>
                </div>
            </form>
        </div>
    );
}

