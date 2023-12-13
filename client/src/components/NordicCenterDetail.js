import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import WeatherBox from "./cards-lists-boxes/WeatherBox";
import TripList from "./cards-lists-boxes/TripList";

import { Row, Col, Container } from "react-bootstrap";

import InfoAndMapContainer from "./InfoAndMapContainer";



function NordicCenterDetail() {

    const [weather, setWeather] = useState(null)
    const [nordicCenter, setNordicCenter] =  useState(null)

    const { nordic_center_id } = useParams()

    useEffect(() => {
        fetch(`/api/nordiccenters/${nordic_center_id}`)
        .then(res => res.json())
        .then(data => {
            setNordicCenter(data)
            const weatherFetchLink = `https://api.openweathermap.org/data/3.0/onecall?` + 
                `lat=${data.latitude}&lon=${data.longitude}&units=imperial&exclude=minutely,hourly` + 
                `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            fetch(weatherFetchLink)
            .then(res => res.json())
            .then(data => 
                {setWeather(data)
                console.log(data)})
        
        })
            
        }
    , [nordic_center_id])


    return (
        <div>
            <Container>
            <InfoAndMapContainer nordicCenter={nordicCenter} />
            
            <Row>
                <Col>
                    <WeatherBox weather={weather} />
                </Col>
                
            </Row>
            <Row className="">
                <TripList />
            </Row>


            </Container>
            
        </div>
    )
}

export default NordicCenterDetail