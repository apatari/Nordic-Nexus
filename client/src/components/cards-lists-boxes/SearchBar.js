import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function SearchBar() {
    return (
        <div className="bg-success m-1 rounded" >
            <Form>
                <Row>
                    <Col className="m-2 ms-5 " >
                        <Form.Control placeholder="Search Nordic Centers" />
                    </Col>
                    <Col sm={2} className="m-2" ><Button>Search</Button></Col>
                    <Col sm={2} className="m-2 me-5" >
                        <Form.Select aria-label="Default select example" className="bg-light bg-opacity-75">
                            <option>Sort Results:</option>
                            <option value="1">By name</option>
                            <option value="2">By average rating</option>
                            <option value="3">By distance from you</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}

export default SearchBar