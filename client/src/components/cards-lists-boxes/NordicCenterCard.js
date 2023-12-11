import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom'


function NordicCenterCard({ nordicCenter }) {
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
                    <ProgressBar className="mb-4 fs-5" >
                        <ProgressBar className="" striped variant="success" label={4.5} now={35} key={1} />
                        <ProgressBar striped variant="warning" label={3.4}  now={20} key={2} />
                        <ProgressBar striped variant="info" now={10} key={3} />
                    </ProgressBar>
                    <Card.Title> <strong>Address: </strong> {nordicCenter.address}</Card.Title>
                    {nordicCenter.report_url? <a href={nordicCenter.report_url} >Trail Report</a>: ""}
                </Card.Body>

            </Card>

        </div>
    )
}

export default NordicCenterCard