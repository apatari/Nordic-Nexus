
import NordicCenterInfo from "./cards-lists-boxes/NordicCenterInfo";


import React, { useState, useContext } from "react";
import { Row, Col, Button, Placeholder, Card } from 'react-bootstrap';
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer} from '@react-google-maps/api' 

import { UserContext } from "./App";

const lib = ['places']

function InfoAndMapContainer({ nordicCenter }) {

    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    

    const user = useContext(UserContext)

    const {isLoaded} = useJsApiLoader({
        libraries: lib,
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
      })

    async function calculateRoute() {
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
     
        const results = await directionsService.route({
          origin: user.address,
          destination: nordicCenter.address,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)  
        
      }



    return(
        <div>
            <Row className="mt-3" >
                <Col md={5} > 
                    <Row>
                        <NordicCenterInfo nordicCenter={nordicCenter} />
                    </Row>  
                    <Row>
                        <div className=" mt-2 p-2 rounded h-100" >
                            {(duration)? 
                            <div>
                                <h4>Duration: {duration}</h4>
                                <h4>Distance: {distance}</h4>
                            </div>
                                 : ""}
                            <Button onClick={calculateRoute} className="btn-info" >Show route on map &#8594; </Button>
                        </div>
                    </Row>
                </Col>
                <Col> 

                    { (!isLoaded || !nordicCenter) ?
            
                        <div className="bg-success bg-opacity-50 m-2 p-2 rounded" >
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                        </div>:
            
                        <div className="bg-success bg-opacity-50 m-2 p-2 rounded" >
                            <GoogleMap
                            
                            options={{
                                zoomControl: true,
                                streetViewControl: true,
                                mapTypeControl: true,
                                fullscreenControl: true
                            }}
                            center={{ lat: nordicCenter.latitude, lng: nordicCenter.longitude }}
                            zoom={15}
                            mapContainerStyle={{width: '100%', height: '400px'}}
                            
                        >
                            <Marker position={{ lat: nordicCenter.latitude, lng: nordicCenter.longitude }} />
                        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
                        </GoogleMap>
                        
                        </div>
                    }

                </Col>

            </Row>
        </div>
    )
}

export default InfoAndMapContainer