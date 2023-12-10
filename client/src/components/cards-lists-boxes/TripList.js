import React from "react";
import { Card } from "react-bootstrap";
import TripCard from "./TripCard";
import TripCardPlaceholder from "./TripCardPlaceholder";

function TripList() {
    return (
        <div className="m-2" >
            <h4 className="m-3" >Latest Trips</h4>
            
            <TripCardPlaceholder />
            <TripCardPlaceholder />
            <TripCardPlaceholder />
            
        
        </div>
    )
}

export default TripList