import React, { useContext } from "react";
import { Row, Col, Button, Placeholder, Card } from "react-bootstrap";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NordicCenterInfo({ nordicCenter }) {

    const [user, setUser] = useContext(UserContext)

    const history = useHistory()

    const handleFavClick = () => {
        fetch('/api/favorites', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"user_id": user.id, "nordic_center_id": nordicCenter.id})
        })
        .then(res => {
            if (res.status === 201) {
                return res.json()
                .then(favorite => setUser({...user, favorites: [...user.favorites, favorite]}))
            } else {
                setUser({...user, favorites: user.favorites.filter(item => !(item.user_id === user.id && item.nordic_center_id === nordicCenter.id))})
            }
        })
    }

    if (!nordicCenter) {
        return(
        <div className="" >
            <Card style={{ width: '100%', height: '18rem' }}>
                
                <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
            </Card>
        </div>
        )
    }

    return (
        
        <div className="bg-info bg-opacity-25 rounded p-3 fs-4 mt-2 h-100 d-flex flex-column" >
        <Row>
            <h3>{nordicCenter.name}</h3>
        </Row>
        <Row>
            <p>{nordicCenter.address}</p>
        </Row>

        <Row className="mb-2 fs-4" >
            <div className="my-1">
                {nordicCenter.report_url? <a href={nordicCenter.report_url} target="_blank" rel="noopener noreferrer" >Trail Report</a>: ""}
            </div>
            <div className="my-1 mb-3">
                {nordicCenter.map_url? <a href={nordicCenter.map_url} target="_blank" rel="noopener noreferrer" >Trail Map</a>: ""}
            </div>
        </Row>
        <Row className="d-flex mt-auto " >
            <Col className="" >
                { (user.favorites.map(fav => fav.nordic_center_id).includes(nordicCenter.id)) ? 
                    <Button className="btn-warning" onClick={handleFavClick} >Remove from Favorites</Button> :
                    <Button onClick={handleFavClick} >Add to Favorites</Button>  }  
            </Col>
            <Col>
                <Button onClick={() => history.push(`/nordiccenters/${nordicCenter.id}/edit`)} >Edit Info</Button>
            </Col>
        </Row>
    </div>
    ) 
}


export default NordicCenterInfo