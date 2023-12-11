import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import WeatherBox from "./cards-lists-boxes/WeatherBox";
import TripList from "./cards-lists-boxes/TripList";
import NordicCenterInfo from "./cards-lists-boxes/NordicCenterInfo";
import NordicCenterMap from "./cards-lists-boxes/NordicCenterMap";
import { Row, Col, Container } from "react-bootstrap";



function NordicCenterDetail() {

    const [weather, setWeather] = useState(null)
    const [nordicCenter, setNordicCenter] =  useState(null)

    const { nordic_center_id } = useParams()

    useEffect(() => {
        fetch(`/api/nordiccenters/${nordic_center_id}`)
        .then(res => res.json())
        .then(data => {
            setNordicCenter(data)
            const weatherFetchLink = `http://api.openweathermap.org/data/3.0/onecall?` + 
                `lat=${data.latitude}&lon=${data.longitude}&units=imperial&exclude=minutely,hourly` + 
                `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
            fetch(weatherFetchLink)
            .then(res => res.json())
            .then(data => 
                {setWeather(data)
                console.log(data)})
        
        })
            
        }
    , [])


    return (
        <div>
            <Container>
        
            <Row className="mt-3" >
                <Col> <NordicCenterInfo nordicCenter={nordicCenter} /> </Col>
                <Col> <NordicCenterMap nordicCenter={nordicCenter}  /> </Col>

            </Row>
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