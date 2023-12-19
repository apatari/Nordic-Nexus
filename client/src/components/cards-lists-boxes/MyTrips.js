import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../App";
import { Row, Card } from "react-bootstrap";
import TripCard from "./TripCard";
import TripCardPlaceholder from "./TripCardPlaceholder"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function MyTrips( ) {

    const [user] = useContext(UserContext)

    const TRIP_COUNT = 6

    const [trips, setTrips] = useState(null)

    useEffect(() => {
        fetch('/api/trips')
        .then(res => res.json())
        .then(data => setTrips(data.filter(item => item.user.id === user.id)))
    }, [])


    if (!trips) {
        return (
            <div className="me-2 mt-4" >
            <Row>
                <h4 className="m-2" >My Trips</h4>
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
    } else if (trips.length > 0) {

    

        return (
            <div className="me-2 mt-4" >
                <Row>
                    <h4 className="m-2" >My Trips</h4>
                </Row>
                <div  className="d-flex flex-wrap">
                <Row>
                    
                    
                    {trips.slice(0,TRIP_COUNT).map(trip => {
                        return <TripCard  background={"bg-success bg-opacity-25 border-0 "} trip={trip} key={trip.id}/>
                    }) }
                    
                </Row>
                </div>
            
            </div>
        )
    } else {
        return (
            <div className=" text-white mt-4" >
                <Card className=" bg-success text-white w-75" >
                    <Card.Header>
                        <h4>
                            My Trips
                        </h4>
                        
                    </Card.Header>
                    <Card.Body>
                        <Card.Text className="fs-5" >
                            <Link className="text-warning-emphasis" to={'/trips/new'} >
                                Record your latest trips</Link> to rate the skiing conditions and comment on the experience. 
                        </Card.Text> 
                    </Card.Body>
                </Card>
            </div>
        )
    }   
}

export default MyTrips