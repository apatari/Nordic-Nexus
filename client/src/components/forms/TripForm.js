import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

function TripForm() {
    return (
        <div className="ms-4" >
            <Col lg={8} className="m-5 p-3 bg-success bg-opacity-25 rounded-4" >
                <h3 className="text-primary" >New Trip</h3>
                <Form>
                    <Row>
                        <Col>
                            <Form.Select  aria-label="Default select example" className="bg-light bg-opacity-75">
                                <option>Nordic Center:</option>
                                <option value="name">Name A-Z</option>
                                <option value="nameDesc">Name Z-A</option>
                                <option value="rating">Average rating</option>
                                
                            </Form.Select>
                        </Col>
                        <Col>
                            <Form.Control placeholder="date" />
                        </Col>
                    </Row>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Snow Cover:</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="rating"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            // checked={formik.values.rating === num}
                                            // onChange={formik.handleChange}   
                                        />
                                        )
                                    })
                                }
                        </div>
                            </Col>
                    </Row>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Grooming:</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="rating"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            // checked={formik.values.rating === num}
                                            // onChange={formik.handleChange}   
                                        />
                                        )
                                    })
                                }
                        </div>
                            </Col>
                    </Row>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Weather:</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="rating"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            // checked={formik.values.rating === num}
                                            // onChange={formik.handleChange}   
                                        />
                                        )
                                    })
                                }
                        </div>
                            </Col>
                    </Row>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Fun Factor:</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="rating"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            // checked={formik.values.rating === num}
                                            // onChange={formik.handleChange}   
                                        />
                                        )
                                    })
                                }
                        </div>
                            </Col>
                    </Row>
                    
                    <Form.Group className="form-floating m-3"  >
                        <Form.Control 
                            as="textarea" 
                            id="comment" 
                            name="comment"
                            style={{ height: '100px'}}
                            placeholder="Comment(optional)"
                            // value={formik.values.name}
                            // onChange={formik.handleChange}
                            />

                        <Form.Label>Comment (optional)</Form.Label>
                        {/* {formik.errors.name ? <div className="text-danger" >{formik.errors.name}</div> : ""} */}
                    </Form.Group>

                    <div className="d-flex" >
                        <Button type="submit" size='lg' className="ms-auto me-3 btn-success " >Submit</Button>

                    </div>
                       
                </Form>
            </Col>
        </div>
    )
}

export default TripForm