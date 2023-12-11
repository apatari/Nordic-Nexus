import React from "react";
import { Card } from "react-bootstrap";
import TripCard from "./TripCard";
import TripCardPlaceholder from "./TripCardPlaceholder";
import { Row } from "react-bootstrap";

function TripList() {
    return (
        <div className="me-2" >
            <Row>
                <h4 className="m-3" >Latest Trips</h4>
            </Row>
            <div  className="d-flex flex-wrap">
            <Row>

                <TripCardPlaceholder />
                <TripCardPlaceholder />
                <TripCardPlaceholder />
            </Row>
            </div>
        
        </div>
    )
}

export default TripList