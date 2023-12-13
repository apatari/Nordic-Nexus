import React, { useState, useEffect } from "react";

import TripCardPlaceholder from "./TripCardPlaceholder";
import { Row } from "react-bootstrap";
import TripCard from "./TripCard";


function TripList( {center} ) {

    const TRIP_COUNT = 4

    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/api/trips')
        .then(res => res.json())
        .then(data => setTrips(data))
    }, [])



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