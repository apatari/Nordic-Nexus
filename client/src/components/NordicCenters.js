import React, { useState, useEffect } from "react";
import SearchBar from "./cards-lists-boxes/SearchBar";
import { Row, Col, Container } from "react-bootstrap";
import NordicCenterList from "./cards-lists-boxes/NordicCenterList";
import TripList from "./cards-lists-boxes/TripList";
import MyCard from "./cards-lists-boxes/MyCard";

function NordicCenters () {

    const [nordicCenters, setNordicCenters] = useState(null)

    useEffect(() => {
        fetch('/api/nordiccenters')
        .then(res => res.json())
        .then(data => setNordicCenters(data))
    }, [])

    return (
        <div className="" >
            <SearchBar />
            
            <Row>
                <Col lg={9} >
                    <NordicCenterList nordicCenters={nordicCenters} />
                </Col>
                <Col>
                    <TripList />
                    <MyCard />
                </Col>
            </Row>
            
        </div>
    )
}

export default NordicCenters