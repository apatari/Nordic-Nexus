import React, { useState, useEffect } from "react";

function NordicCenters () {

    const [weather, setWeather] = useState(null)

    const fetchLink = `http://api.openweathermap.org/data/3.0/onecall?` + 
    `lat=42.85&lon=-72.56&units=imperial&exclude=minutely,hourly` + 
    `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`


    useEffect(() => {
        fetch(fetchLink)
        .then(res => res.json())
        .then(data => 
            {setWeather(data)
            console.log(data)})
       
    }, [])

    return (
        <div>
            <h2>nordic centers</h2>
            <h4>Weather report:</h4>
            <div className="m-3" >
                {weather? 
                weather.daily.map(day=> {
                    return <p key={day.dt} > 
                        <strong>{Math.round(day.temp.max)} / {Math.round(day.temp.min)} : </strong> 
                        Short: {day.weather[0].description} Long: {day.summary} </p>
                }) : "Loading..."}
            </div>
        </div>
    )
}

export default NordicCenters