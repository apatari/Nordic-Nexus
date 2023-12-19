import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom'

function TripCard({ trip, background }) {
    return (
        <Card style={{width: '16rem'}}  className={ `${background} mx-2 my-3`} >
            <Card.Body>
        
                
                <Card.Title
                    className="fs-5 text-info "
                    as={Link}
                    style={{textDecoration: 'none'}}
                    to={`/nordiccenters/${trip.nordic_center.id}`}> 
                    {trip.nordic_center.name}
                    </Card.Title>
                
                <Card.Text>{(background === "")?<strong> {trip.user.username},</strong>: ""} {trip.date} </Card.Text>
                
                <Card.Text> <em> {trip.comment}</em></Card.Text>
                    <ProgressBar className="" >
                        <ProgressBar striped variant="primary" now={trip.snow_cover * 5}  key={4} />
                        <ProgressBar striped variant="success"  now={trip.grooming * 5} key={1} />
                        <ProgressBar striped variant="info" now={trip.weather * 5}  key={3} />
                        <ProgressBar striped variant="warning"   now={trip.fun_factor * 5} key={2} />
                    </ProgressBar>
            </Card.Body>
        </Card>
    )
}

export default TripCard