import React, { useState, useEffect } from "react";
import SearchBar from "./cards-lists-boxes/SearchBar";
import { Row, Col } from "react-bootstrap";
import NordicCenterList from "./cards-lists-boxes/NordicCenterList";
import TripList from "./cards-lists-boxes/TripList";

function NordicCenters () {

    

    return (
        <div>
            <SearchBar />
            <Row>
                <Col lg={9} >
                    <NordicCenterList />
                </Col>
                <Col>
                    <TripList />
                </Col>
            </Row>
            
        </div>
    )
}

export default NordicCenters