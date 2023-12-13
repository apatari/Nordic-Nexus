import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function SearchBar({ searchText, setSearchText, sortBy, setSortBy }) {

    const handleSortChange = (e) => {
        setSortBy(e.target.value)
        
    }



    return (
        <div className="bg-success" >
            <Form>
                <Row>
                    <Col className="m-2 ms-5 " >
                        <Form.Control  placeholder="Search Nordic Centers" />
                    </Col>
                    <Col sm={3} className="m-2" ><Button>Search</Button></Col>
                    <Col sm={2} className="m-2 me-5" >
                        <Form.Select  value={sortBy} onChange={handleSortChange} aria-label="Default select example" className="bg-light bg-opacity-75">
                            <option>Sort By:</option>
                            <option value="name">Name A-Z</option>
                            <option value="nameDesc">Name Z-A</option>
                            <option value="rating">Average rating</option>
                            
                        </Form.Select>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}

export default SearchBar