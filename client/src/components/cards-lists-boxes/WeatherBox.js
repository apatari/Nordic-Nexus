import React from "react";
import WeatherCard from "./WeatherCard";
import { Row } from "react-bootstrap";

function WeatherBox({ weather }) {

    
    return (
        <div className="p-3 ps-4 rounded" >
            <Row className="fs-4" >
                Weather Report:
            </Row>
             
             
            <div className="m-2 d-flex flex-wrap" >
                {weather? 
                weather.daily.slice(0,6).map((day, index)=> {
                    return <WeatherCard key={day.dt} day={day} index={index} /> 
                        
                }) : "Loading..."}
            </div> 
        </div>
    )
}

export default WeatherBox