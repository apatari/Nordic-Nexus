import React from "react";
import { Card, Row, Col } from "react-bootstrap";

function MyCard() {
    return (
        <div className="me-3 m-2" >
            <Card className="p-2 fs-6 bg-info bg-opacity-25" >
                <Card.Text>Web development by:</Card.Text>
                <Card.Text><strong>Andy Patari</strong></Card.Text>
                <Row>
                    <Col><a href="https://github.com/apatari">Github</a></Col>
                    <Col><a href="https://www.linkedin.com/in/andrew-patari/">LinkedIn</a></Col>
                    <Col><a href="https://dundermethodpaperco.hashnode.dev/">Blog</a></Col>
                </Row>
                          
            </Card>
        </div>
    )
}

export default MyCard