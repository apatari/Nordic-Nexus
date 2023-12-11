import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function NordicCenterInfo() {
    return (
        
        <div className="bg-primary bg-opacity-25 rounded m-3 p-3 fs-5" >
        <Row>
            <h4>Grafton Ponds</h4>
        </Row>
        <Row>
            <p>123 Putney Road, Grafton, VT</p>
        </Row>

        <Row className="mb-2" >
            <a href="http://www.google.com">Trail Report</a>
            <a href="http://www.google.com">Trail Map</a>
        </Row>
        <Row>
            <Col>
                <Button>Add to Favorites</Button>
            </Col>
            <Col>
                <Button>Edit Info</Button>
            </Col>
        </Row>
    </div>
    )
}

export default NordicCenterInfo