
import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button } from 'react-bootstrap';
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

      const showInputs = () => {
        console.log(user, nordicCenter.address)
    }


      if (!isLoaded || !nordicCenter) {
        return <h2 className='m-3' >Loading...</h2>
      }

    return (
        <div className="bg-info m-2 p-2 rounded" >
            <GoogleMap
            
            center={{ lat: nordicCenter.latitude, lng: nordicCenter.longitude }}
            zoom={15}
            mapContainerStyle={{width: '500px', height: '350px'}}
            
          >
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
          <Col>Distance: {distance} </Col>
          <Col>Duration: {duration} </Col>
          <Button onClick={calculateRoute}  >Show directions</Button>
          <Button onClick={showInputs}  >Show addresses</Button>
        </div>
    )
}

export default NordicCenterMap