
import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button, Placeholder, Card } from 'react-bootstrap';
import { useJsApiLoader, GoogleMap, DirectionsRenderer} from '@react-google-maps/api' 

import { UserContext } from "../App";


function NordicCenterMap({ nordicCenter }) {

    

    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    // const [destination, setDestination] = useState('')
    // const [origin, setOrigin] = useState('')

    const user = useContext(UserContext)

    const {isLoaded} = useJsApiLoader({
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



      if (!isLoaded || !nordicCenter) {
        return (
            <div className="bg-info bg-opacity-50 m-2 p-2 rounded" >
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
            </div>
        )
        
      }

    return (
        <div className="bg-info bg-opacity-50 m-2 p-2 rounded" >
            <GoogleMap
            
            center={{ lat: nordicCenter.latitude, lng: nordicCenter.longitude }}
            zoom={15}
            mapContainerStyle={{width: '100%', height: '350px'}}
            
          >
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
          <Col>Distance: {distance} </Col>
          <Col>Duration: {duration} </Col>
          <Button onClick={calculateRoute}  >Show directions</Button>
          
        </div>
    )
}

export default NordicCenterMap