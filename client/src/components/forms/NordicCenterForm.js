import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function NordicCenterForm() {
    return (
        <div className="ms-4" >
           
                
            <Col lg={5} className="m-5" >
                <h3>New Nordic Center</h3>
                <Form  >
                    
                    <Form.Group className="form-floating m-3"  >
                        <Form.Control 
                            type="text" 
                            id="name" 
                            name="name"
                            placeholder="Name"
                            // value={formik.values.name}
                            // onChange={formik.handleChange}
                            />

                        <Form.Label>Name</Form.Label>
                        {/* {formik.errors.name ? <div className="text-danger" >{formik.errors.name}</div> : ""} */}
                    </Form.Group>
                    <Form.Group className="form-floating m-3"  >
                        <Form.Control 
                            type="text" 
                            id="address" 
                            name="address"
                            placeholder="Address"
                            // value={formik.values.address}
                            // onChange={formik.handleChange}
                            />

                        <Form.Label>Address</Form.Label>
                        {/* {formik.errors.address ? <div className="text-danger" >{formik.errors.address}</div> : ""} */}
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="form-floating m-3 me-1"  >
                                <Form.Control 
                                    type="text" 
                                    id="latitude" 
                                    name="latitude"
                                    placeholder="Latitude"
                                    // value={formik.values.latitude}
                                    // onChange={formik.handleChange}
                                    />

                                <Form.Label>Latitude</Form.Label>
                                
                            </Form.Group>
                        </Col>
                        <Col> 
                            <Form.Group className="form-floating m-3 ms-1"  >
                                <Form.Control 
                                    type="text" 
                                    id="longitude" 
                                    name="longitude"
                                    placeholder="Longitudes"
                                    // value={formik.values.longitude}
                                    // onChange={formik.handleChange}
                                    />

                                <Form.Label>Longitude</Form.Label>
                            </Form.Group>
                        </Col>
                        {/* {formik.errors.longitude ? <div className="text-danger" >{formik.errors.longitude}</div> : ""} */}
                        {/* {formik.errors.latitude ? <div className="text-danger" >{formik.errors.latitude}</div> : ""} */}
                    </Row>

                    
                    <Form.Group className="form-floating m-3"  >
                        <Form.Control 
                            type="text" 
                            id="report_url" 
                            name="report_url"
                            placeholder="Trail Report URL"
                            // value={formik.values.report_url}
                            // onChange={formik.report_url}
                            />

                        <Form.Label>Trail Report URL (optional)</Form.Label>
                        {/* {formik.errors.report_url ? <div className="text-danger" >{formik.errors.report_url}</div> : ""} */}
                    </Form.Group>

                    <Form.Group className="form-floating m-3"  >
                        <Form.Control 
                            type="text" 
                            id="map_url" 
                            name="map_url"
                            placeholder="Trail Map URL"
                            // value={formik.values.map_url}
                            // onChange={formik.map_url}
                            />

                        <Form.Label>Trail Map URL (optional)</Form.Label>
                        {/* {formik.errors.map_url ? <div className="text-danger" >{formik.errors.map_url}</div> : ""} */}
                    </Form.Group>
                    <div className="d-flex" >
                        <Button type="submit" size='lg' className="ms-auto me-3 btn-success " >Submit</Button>

                    </div>
                    
                </Form>
            </Col>
            
        </div>
    )
}

export default NordicCenterForm