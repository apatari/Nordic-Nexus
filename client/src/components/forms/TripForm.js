import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Form, Button, ProgressBar } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "../App";
import { useFormik } from "formik";
import * as yup from "yup"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function TripForm() {

    const [nordicCenters, setNordicCenters] = useState(null)
    // const [errors, setErrors] = useState([])

    const [user] = useContext(UserContext)

    const history = useHistory()

    const [tripDate, setTripDate] = useState(new Date())
    const today = new Date()
    
    useEffect(() => {
        fetch('/api/nordiccenters')
        .then(res => res.json())
        .then(data => setNordicCenters(data))
    }, [])

    const formSchema = yup.object().shape({
        comment: yup.string().max(200, "Must be fewer than 200 characters"),
        nordic_center_id: yup.number().integer().required("Must select a Nordic center"),
        snow_cover: yup 
          .number()
          .integer()
          .required("Must enter a rating")
          .typeError("Please enter an Integer")
          .max(5)
          .min(0),
        grooming: yup 
          .number()
          .integer()
          .required("Must enter a rating")
          .typeError("Please enter an Integer")
          .max(5)
          .min(0),
        weather: yup 
          .number()
          .integer()
          .required("Must enter a rating")
          .typeError("Please enter an Integer")
          .max(5)
          .min(0),
        fun_factor: yup 
          .number()
          .integer()
          .required("Must enter a rating")
          .typeError("Please enter an Integer")
          .max(5)
          .min(0),
      });

    const formik = useFormik({
        initialValues: {
            comment: "",
            nordic_center_id: "",
            snow_cover: 0,
            grooming: 0,
            weather: 0,
            fun_factor: 0,

        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('/api/trips', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...values, "user_id": user.id, "date": tripDate.toJSON().slice(0,10)})
            })
            .then(r => {
                if (r.ok) {
                     
                    history.push('/')    
                } else {
                    r.json()
                    .then(err => {
                        // setErrors((currentErrors) => [err.errors])
                        console.log(err)
                    })
                }
            })
            
            
            
            
            
            console.log({...values, "user_id": user.id, "date": tripDate.toJSON().slice(0,10)})}
    })

    return (
        <div className="ms-4" >
            <Col lg={8} className="m-5 p-3 bg-success bg-opacity-25 rounded-4" >
                <h3 className="text-primary" >New Trip</h3>
                <Form className="my-3" onSubmit={formik.handleSubmit} >
                    <Row className="mx-2" >
                        <Col md={6} >
                            <Form.Select  
                                aria-label="Default select example" 
                                id="nordic_center_id" 
                                name="nordic_center_id" 
                                onChange={formik.handleChange} 
                                value={formik.values.nordic_center_id}
                                className="bg-light bg-opacity-75">
                                <option>Nordic Center:</option>
                                {nordicCenters? nordicCenters.map(center =>{
                                    return <option key={center.id} value={center.id} > {center.name}</option>
                                }): ""  }

                            </Form.Select>
                        </Col>
                        <Col className="ms-2"  > <strong>Date:</strong>  
                            <DatePicker className="ms-2" selected={tripDate} maxDate={today} onChange={(date) => {
                                setTripDate(date)
                                console.log(date.toJSON().slice(0,10))
                            }} />
                        </Col>
                    </Row>
                    <div className="mx-4 mt-3 mb-1 fs-4" >
                        <strong>Ratings</strong> 
                    <ProgressBar className="fs-6" >
                        <ProgressBar striped variant="primary" label={`Snow: ${formik.values.snow_cover}`} now={formik.values.snow_cover * 5} key={4} />
                        <ProgressBar striped variant="success" label={`Groom: ${formik.values.grooming}`} now={formik.values.grooming * 5} key={1} />
                        <ProgressBar striped variant="info" label={`Weather: ${formik.values.weather}`} now={formik.values.weather * 5} key={2} />
                        <ProgressBar striped variant="warning" label={`Fun: ${formik.values.fun_factor}`} now={formik.values.fun_factor * 5} key={3} />
                    </ProgressBar>
                    </div>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Snow Cover</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="snow_cover"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            checked={parseInt(formik.values.snow_cover) === num}
                                            onChange={formik.handleChange}   
                                        />
                                        )
                                    })
                                }
                        </div>
                            </Col>
                    </Row>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Grooming</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="grooming"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            checked={parseInt(formik.values.grooming) === num}
                                            onChange={formik.handleChange}   
                                        />
                                        )
                                    })
                                }
                        </div>
                            </Col>
                    </Row>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Weather</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="weather"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            checked={parseInt(formik.values.weather) === num}
                                            onChange={formik.handleChange}   
                                        />
                                        )
                                    })
                                }
                        </div>
                            </Col>
                    </Row>
                    <Row className="my-2 ms-3" >
                        <Col className="me-3 my-auto fs-5" sm={4} >Fun Factor</Col> 
                        <Col>
                        <div className="my-3" > 
                            {[0,1,2,3,4,5].map((num) => {
                                        return (
                                        <Form.Check
                                            key={num}
                                            inline
                                            value={num}
                                            label={num}
                                            name="fun_factor"
                                            type='radio'
                                            id={`inline-radio-${num}`}
                                            checked={parseInt(formik.values.fun_factor) === num}
                                            onChange={formik.handleChange}   
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
                            value={formik.values.comment}
                            onChange={formik.handleChange}
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