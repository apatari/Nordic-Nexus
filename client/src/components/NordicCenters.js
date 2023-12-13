import React, { useState, useEffect } from "react";
import SearchBar from "./cards-lists-boxes/SearchBar";
import { Row, Col } from "react-bootstrap";
import NordicCenterList from "./cards-lists-boxes/NordicCenterList";
import TripList from "./cards-lists-boxes/TripList";
import MyCard from "./cards-lists-boxes/MyCard";

function NordicCenters () {

    const [nordicCenters, setNordicCenters] = useState(null)
    const [searchText, setSearchText] = useState("")
    const [sortBy, setSortBy] = useState("all")
    

    useEffect(() => {
        fetch('/api/nordiccenters')
        .then(res => res.json())
        .then(data => setNordicCenters(data))
    }, [])


    const compareFn = (a,b) => {
        if (sortBy === "name") {
            return (a.name < b.name)? -1 : 1
        } else if (sortBy === "nameDesc") {
            return (a.name < b.name)? 1 : -1
        } else if (sortBy === "rating") {
            if (!a.trips || !b.trips || a.trips.length === 0 || b.trips.length === 0 ) return 0
            else if ((a.trips.map(trip => trip.snow_cover + trip.grooming + trip.weather + trip.fun_factor)
            .reduce((x,y) => x+y) / a.trips.length) <= (b.trips.map(trip => trip.snow_cover + trip.grooming + trip.weather + trip.fun_factor)
            .reduce((x,y) => x+y) / b.trips.length) ) { return 1
            }
            else return -1
        }
    }

    const sortedCenters = nordicCenters? nordicCenters.sort(compareFn) : []
    const centersToDisplay = sortedCenters.filter(center => {
        return (center.name.toLowerCase().includes(searchText.toLowerCase()) || center.address.toLowerCase().includes(searchText.toLowerCase()) )})

    return (
        <div className="" >
            <SearchBar 
                searchText={searchText} 
                setSearchText={setSearchText} 
                sortBy={sortBy} 
                setSortBy={setSortBy} 
                />
            
            <Row>
                <Col lg={9} >
                    {centersToDisplay? <NordicCenterList nordicCenters={centersToDisplay} /> :
                        <NordicCenterList nordicCenters={nordicCenters} />}
                </Col>
                <Col>
                    <TripList center={"all"} />
                    <MyCard />
                </Col>
            </Row>
            
        </div>
    )
}

export default NordicCenters