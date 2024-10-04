import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function TestBlock() {
    const [city, setCity] = useState('London');
    const [weatherData, setWeatherData] = useState(null);
    const [inputValue, setInputValue] = useState(''); 

    useEffect(() => {
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
        e.preventDefault(); // Prevent form from refreshing the page
        setCity(inputValue); // Update the city state with the input value when the button is pressed
    }

    const temp = weatherData?.currentConditions?.temp;
    const humidity = weatherData?.currentConditions?.humidity;
    const tempMax = weatherData?.days[0].tempmax;
    const tempMin = weatherData?.days[0].tempmin;
    const description = weatherData?.days[0].description;
    return (
        <div>
            <form onSubmit={handleChangeCity}>
                <input 
                    type="text" 
                    value={inputValue} // Bind to local input state
                    onChange={handleInputChange} // Update local input state
                />
                <button type="submit">Check Weather</button> {/* Call handleChangeCity on button press */}
            </form>
            <h2>{city}</h2>
            <p>Current Temparature(F): {temp}</p>
            <p>Maximum Temparature(F): {tempMax}</p>
            <p>Minimum Temparature(F): {tempMin}</p>
            <p>Humidity: {humidity}</p>
            <p>Note: {description} </p>
        </div>
    );
}