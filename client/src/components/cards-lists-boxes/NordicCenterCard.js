import React from "react";
import { Card, ProgressBar } from "react-bootstrap";


function NordicCenterCard() {
    return (
        <div>

            <Card className="m-4" > 
                <Card.Header className="fs-4" >Center Name</Card.Header>
                <Card.Body >
                    <Card.Text className="fs-4" >Ratings:</Card.Text> 
                    <ProgressBar className="mb-3" >
                        <ProgressBar className="fs-5" striped variant="success" label={35} now={35} key={1} />
                        <ProgressBar striped variant="warning" now={20} key={2} />
                        <ProgressBar striped variant="info" now={10} key={3} />
                    </ProgressBar>
                    <Card.Title> <strong>Today's Weather: </strong> Sunny and cold</Card.Title>
                    <a href='http://www.google.com' >Trail Report</a>
                </Card.Body>

            </Card>

        </div>
    )
}

export default NordicCenterCard