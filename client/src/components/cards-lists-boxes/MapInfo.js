import React from "react";
import { Button } from "react-bootstrap";

function MapInfo() {
    return (
        <div className=" mt-2 p-2 rounded h-100" >
            {/* <h4>Duration:</h4>
            <h4>Distance:</h4> */}
            <Button className="btn-info" >Show directions on map &#8594; </Button>
        </div>
    )
}

export default MapInfo