import React from "react";
import { Card, ProgressBar, Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom'


function NordicCenterCard({ nordicCenter }) {

    const snowAvg = (nordicCenter.trips.reduce((acc, val) => acc + val.snow_cover, 0) / (nordicCenter.trips.length + .000001)).toFixed(1) * 5
    const groomAvg = (nordicCenter.trips.reduce((acc, val) => acc + val.grooming, 0) / (nordicCenter.trips.length + .000001)).toFixed(1) * 5
    const weatherAvg = (nordicCenter.trips.reduce((acc, val) => acc + val.weather, 0) / (nordicCenter.trips.length + .000001)).toFixed(1) * 5
    const funAvg = (nordicCenter.trips.reduce((acc, val) => acc + val.fun_factor, 0) / (nordicCenter.trips.length + .000001)).toFixed(1) * 5


    return (
        <div>

            <Card className="m-4" > 
                <Card.Header 
                    as={Link} 
                    to={`/nordiccenters/${nordicCenter.id}`} 
                    style={{textDecoration: 'none'}} 
                    className="fs-4 text-info " >
                        {nordicCenter.name}
                </Card.Header>
                <Card.Body >
                    <Card.Text className="fs-5" >Average rating:</Card.Text>
                    {nordicCenter.trips?  
                    <ProgressBar className="mb-4 fs-6" >
                        <ProgressBar striped variant="primary" label={`Snow: ${snowAvg / 5}`} now={snowAvg} key={4} />
                        <ProgressBar striped variant="success" label={`Groom: ${groomAvg / 5}`} now={groomAvg} key={1} />
                        <ProgressBar striped variant="info" label={`Weather: ${weatherAvg / 5}`} now={weatherAvg} key={2} />
                        <ProgressBar striped variant="warning" label={`Fun: ${funAvg / 5}`} now={funAvg} key={3} />
                    </ProgressBar> : ""}
                    <Card.Title> <strong>Address: </strong> {nordicCenter.address}</Card.Title>
                    <Row>
                        <Col sm={2} >

                            {nordicCenter.report_url? <a href={nordicCenter.report_url} target="_blank" >Trail Report</a>: ""}
                        </Col>
                        <Col>

                            {nordicCenter.map_url? <a href={nordicCenter.map_url} target="_blank" >Trail Map</a>: ""}
                        </Col>
                    </Row>
                </Card.Body>

            </Card>

        </div>
    )
}

export default NordicCenterCard