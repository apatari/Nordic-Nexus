import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function NordicCenterInfo({ nordicCenter }) {

    if (!nordicCenter) {<h3 className="m-4" >Loading...</h3>}

    else { return (
        
        <div className="bg-primary bg-opacity-25 rounded p-3 fs-5" >
        <Row>
            <h4>{nordicCenter.name}</h4>
        </Row>
        <Row>
            <p>{nordicCenter.address}</p>
        </Row>

        <Row className="mb-2" >
            {nordicCenter.report_url? <a href={nordicCenter.report_url} >Trail Report</a>: ""}
            {nordicCenter.map_url? <a href={nordicCenter.map_url} >Trail Map</a>: ""}
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
    ) }
}

export default NordicCenterInfo