import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup"
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import DeleteButton from "./DeleteButton";

const lib = ['places']

function EditNCForm() {

    const initial_nc = {
        "name": "",
        "latitude": "",
        "longitude": "",
        "report_url": "",
        "map_url": "",
        "comment": "",
    }

    const history = useHistory()

    const [errors, setErrors] = useState([])
    const [nordicCenter, setNordicCenter] = useState(initial_nc)
    const [address, setAddress] = useState("")
    const [searchResult, setSearchResult] = useState(null)

    const { nordic_center_id } = useParams()

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    useEffect(() => {
        fetch(`/api/nordiccenters/${nordic_center_id}`)
        .then(res => res.json())
        .then(data => {
            setNordicCenter(data)
            setAddress(data.address)
        
        })
            
    }, [])


    const handlePlaceChange = () => {
        if (searchResult) {
            const place = searchResult.getPlace()
            setAddress(place.formatted_address)
        }
        
    }

    function onLoad(autocomplete) {
        
        setSearchResult(autocomplete);
      }

    const {isLoaded} = useJsApiLoader({
        libraries: lib,
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
      })

    const formSchema = yup.object().shape({
        name: yup.string().max(100, "Name must be 100 characters or fewer").required("Please enter a name"),
        latitude: yup.number().required("Enter a latitude").max(180, "Must be less than 180 degrees").min(-180, "must be greater than -180 degrees"),
        longitude: yup.number().required("Enter a longitude").max(180, "Must be less than 180 degrees").min(-180, "must be greater than -180 degrees"),
        report_url: yup.string(),
        map_url: yup.string()
    })

    const formik = useFormik({
        initialValues: {
            name: nordicCenter.name,
            latitude: nordicCenter.latitude,
            longitude: nordicCenter.longitude,
            report_url: (nordicCenter.report_url || ""),
            map_url: (nordicCenter.map_url || ""),
        },
        validationSchema: formSchema,
        validateOnChange: false,
        validateOnBlur: false,
        enableReinitialize: true,
        onSubmit: (values) => {
            

            fetch(`/api/nordiccenters/${nordicCenter.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...values, "address": address}),
            }).then(r => {
                if (r.status === 201) {
                     
                    history.push(`/nordiccenters/${nordicCenter.id}`)    
                } else {
                    r.json().then(err => setErrors((currentErrors) => [err.errors]))
                }
            })
        }
    })

    if (!isLoaded) {
        return <h2 className='m-3' >loading</h2>
      }

    return (
        <div className="ms-4" >
           
                
            <Col lg={6} className="m-5 p-3 bg-info bg-opacity-25 rounded-4" >
                <h3 className="text-primary" >Edit Nordic Center</h3>
                <Form onSubmit={formik.handleSubmit} >
                    
                    <Form.Group className="form-floating m-3"  >
                        <Form.Control 
                            type="text" 
                            id="name" 
                            name="name"
                            placeholder="Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            />

                        <Form.Label>Name</Form.Label>
                        {formik.errors.name ? <div className="text-danger" >{formik.errors.name}</div> : ""}
                    </Form.Group>
                    <Autocomplete
                    onLoad={onLoad}
                    onPlaceChanged={handlePlaceChange} >
                    <Form.Group className="form-floating mt-3 mx-3"  >
                        <Form.Control 
                            type="text" 
                            id="address" 
                            name="address"
                            placeholder="Address"
                            value={address}
                            onChange={handleAddressChange}
                            />

                        <Form.Label>Address</Form.Label>
                        {/* {formik.errors.address ? <div className="text-danger" >{formik.errors.address}</div> : ""} */}
                    </Form.Group></Autocomplete>
                    <Row>
                        <Col>
                            <Form.Group className="form-floating m-3 me-1"  >
                                <Form.Control 
                                    type="number" 
                                    id="latitude" 
                                    name="latitude"
                                    placeholder="Latitude"
                                    step={'any'}
                                    value={formik.values.latitude}
                                    onChange={formik.handleChange}
                                    />

                                {formik.errors.latitude ? <div className="text-danger" >{formik.errors.latitude}</div> : ""}
                                <Form.Label>Latitude</Form.Label>
                                
                            </Form.Group>
                        </Col>
                        <Col> 
                            <Form.Group className="form-floating m-3 ms-1"  >
                                <Form.Control 
                                    type="number" 
                                    id="longitude" 
                                    name="longitude"
                                    placeholder="Longitudes"
                                    step={'any'}
                                    value={formik.values.longitude}
                                    onChange={formik.handleChange}
                                    />

                                {formik.errors.longitude ? 
                                    <div className="text-danger" >{formik.errors.longitude}</div> : ""}
                                <Form.Label>Longitude</Form.Label>
                            </Form.Group>
                        </Col>
                    </Row>

                    
                    <Form.Group className="form-floating mb-3 mx-3"  >
                        <Form.Control 
                            type="text" 
                            id="report_url" 
                            name="report_url"
                            placeholder="Trail Report URL"
                            value={formik.values.report_url}
                            onChange={formik.handleChange}
                            />

                        <Form.Label>Trail Report URL (optional)</Form.Label>
                        {formik.errors.report_url ? <div className="text-danger" >{formik.errors.report_url}</div> : ""}
                    </Form.Group>

                    <Form.Group className="form-floating m-3"  >
                        <Form.Control 
                            type="text" 
                            id="map_url" 
                            name="map_url"
                            placeholder="Trail Map URL"
                            value={formik.values.map_url}
                            onChange={formik.handleChange}
                            />

                        <Form.Label>Trail Map URL (optional)</Form.Label>
                        {formik.errors.map_url ? <div className="text-danger" >{formik.errors.map_url}</div> : ""}
                    </Form.Group>
                    <div className="d-flex" >
                        {errors.map((err) => (
                                <p className="text-danger m-3" key={err}>{err}</p>
                            ))}
                    </div>

                    <div className="d-flex" >
                        <Button type="submit" size='lg' className="ms-auto me-3 btn-success " >Submit Edits</Button>

                    </div>
                    
                </Form>
            </Col>
                <div> <DeleteButton nordicCenter={nordicCenter} /> </div>
            
        </div>
    )
}

export default EditNCForm