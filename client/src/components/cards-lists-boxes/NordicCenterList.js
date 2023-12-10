import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
import NordicCenterCard from "./NordicCenterCard";


function NordicCenterList() {
    return (
        <div className="m-2" >
            <h3 className="m-3" >Nordic Centers</h3>
            
            <NordicCenterCard />
            <NordicCenterCard />
            <NordicCenterCard />
        
        </div>
    )
}

export default NordicCenterList