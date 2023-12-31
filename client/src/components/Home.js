import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./App";
import NordicCenterList from "./cards-lists-boxes/NordicCenterList";
import TripList from "./cards-lists-boxes/TripList";
import MyCard from "./cards-lists-boxes/MyCard";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MyTrips from "./cards-lists-boxes/MyTrips";


function Home() {

    const [user] = useContext(UserContext)

    const [nordicCenters, setNordicCenters] = useState(false)

    useEffect(() => {
        fetch('/api/nordiccenters')
        .then(res => res.json())
        .then(data => setNordicCenters(data.filter(center => {
            return center.favorites.some(favorite => favorite.user_id === user.id)})))
    }, [user.id])



    return (
        <div className="" >
            
            <Row>
                <Col lg={9} >
                
                {nordicCenters ? 
                    
                        ((nordicCenters.length > 0)?
                            <div ><NordicCenterList nordicCenters={nordicCenters} mode={"home"} /> </div>:
                           
                            <Row className="m-4 text-white" >
                                <Card className=" m-3 bg-info text-white w-75" >
                                    <Card.Header>
                                        <h4>
                                            Favorites
                                        </h4>
                                        
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text className="fs-5" >
                                            Explore <Link className="text-warning-emphasis" to={'/nordiccenters'} >Nordic centers</Link> and click the 'Add to Favorites' button on any ones you want to display here!
                                        </Card.Text> 
                                    </Card.Body>
                                </Card>
                            </Row>
                            )
                     : 
                    <Row lg={9} >
                        
                        <NordicCenterList nordicCenters={false} mode={"home"} />
                        
                    </Row> 
                }
                <Row className="ps-4 ms-1 ">
                <MyTrips />
                </Row>
                </Col>
                <Col>
                    
                    <TripList center={"all"} />
                    <MyCard />
                </Col>
            </Row>
            
        </div>
    )
}

export default Home