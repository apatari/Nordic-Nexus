import React from "react";
import { Card } from "react-bootstrap";

function WeatherCard({ day, index }) {

    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayNumber = new Date().getDay()
    const dayName = index === 0 ? "Today" : days[(index + dayNumber) % 7]

    return (
        <Card style={{width: '10rem'}} className="m-2 p-2"  >
            <p><strong>{dayName}:</strong></p>
            {day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1)}
            <strong>{Math.round(day.temp.max)} / {Math.round(day.temp.min)}</strong>
        </Card>
    )
}
{/*  
                        Short:  Long: {day.summary} </p> */}

export default WeatherCard