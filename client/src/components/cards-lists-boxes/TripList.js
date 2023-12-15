import React, { useState, useEffect } from "react";

import { Row } from "react-bootstrap";
import TripCard from "./TripCard";
import TripCardPlaceholder from "./TripCardPlaceholder"


function TripList( {center} ) {

    const TRIP_COUNT = 4

    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('/api/trips')
        .then(res => res.json())
        .then(data => setTrips(data))
    }, [])


    if (!trips) {
        return (
            <div className="me-2 mt-4" >
            <Row>
                <h4 className="m-2" >Latest Trips</h4>
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

    return (
        <div className="me-2 mt-4" >
            <Row>
                <h4 className="m-2" >Latest Trips</h4>
            </Row>
            <div  className="d-flex flex-wrap">
            <Row>
                {(center === "all")?
                trips.slice(0,TRIP_COUNT).map(trip => {
                    return <TripCard trip={trip} key={trip.id}/>
                }) : 
                trips.filter(trip => trip.nordic_center.id === parseInt(center)).slice(0,TRIP_COUNT).map(trip => {
                    return <TripCard trip={trip}key={trip.id} />
                })
                }
                
            </Row>
            </div>
        
        </div>
    )
}

export default TripList