import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function NordicCenterInfo({ nordicCenter }) {

    if (!nordicCenter) {<h3 className="m-4" >Loading...</h3>}

    else { return (
        
        <div className="bg-primary bg-opacity-25 rounded p-3 fs-4 mt-2" >
        <Row>
            <h3>{nordicCenter.name}</h3>
        </Row>
        <Row>
            <p>{nordicCenter.address}</p>
        </Row>

        <Row className="mb-2 fs-4" >
            <div className="my-1">
                {nordicCenter.report_url? <a href={nordicCenter.report_url} >Trail Report</a>: ""}
            </div>
            <div className="my-1 mb-3">
                {nordicCenter.map_url? <a href={nordicCenter.map_url} >Trail Map</a>: ""}
            </div>
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