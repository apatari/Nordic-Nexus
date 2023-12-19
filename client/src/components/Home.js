import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./App";
import NordicCenterList from "./cards-lists-boxes/NordicCenterList";
import TripList from "./cards-lists-boxes/TripList";
import MyCard from "./cards-lists-boxes/MyCard";
import { Row, Col } from "react-bootstrap";


function Home() {

    const [user] = useContext(UserContext)

    const [nordicCenters, setNordicCenters] = useState([])

    useEffect(() => {
        fetch('/api/nordiccenters')
        .then(res => res.json())
        .then(data => setNordicCenters(data))
    }, [])

    const centersToDisplay = nordicCenters.filter(center => {
        return center.favorites.some(favorite => favorite.user_id === user.id)})

        {(centersToDisplay.length > 0)?
            <NordicCenterList nordicCenters={false} mode={"home"} /> :
            <div className="m-3 text-warning">
                <h4>Select your favorite Nordic centers to see them here </h4>
            </div>
            }

    return (
        <div className="" >
            
            <Row>
                {nordicCenters ? 
                    
                        ((centersToDisplay.length > 0)?
                            <Col lg={9} ><NordicCenterList nordicCenters={centersToDisplay} mode={"home"} /> </Col>:
                            <Col className="m-4 text-warning" lg={9} >
                                <h4 >Select your favorite Nordic centers to see them here </h4>
                            </Col>)
                     : 
                    <Col lg={9} >
                        
                        <NordicCenterList nordicCenters={false} mode={"home"} />
                        
                    </Col> 
                }
                <Col>
                    <TripList center={"all"} />
                    <MyCard />
                </Col>
            </Row>
            
        </div>
    )
}

export default Home