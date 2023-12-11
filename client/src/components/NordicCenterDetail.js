import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import WeatherBox from "./cards-lists-boxes/WeatherBox";
import TripList from "./cards-lists-boxes/TripList";
import NordicCenterInfo from "./cards-lists-boxes/NordicCenterInfo";
import NordicCenterMap from "./cards-lists-boxes/NordicCenterMap";
import { Row, Col, Container } from "react-bootstrap";



function NordicCenterDetail() {

    const [weather, setWeather] = useState(null)

    const { nordic_center_id } = useParams()

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
            <Container>
            Nordic Detail {nordic_center_id}

            <Row>
                <Col> <NordicCenterInfo/> </Col>
                <Col> <NordicCenterMap /> </Col>

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