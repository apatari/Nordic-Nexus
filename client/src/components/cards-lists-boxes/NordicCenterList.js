import React from "react";

import NordicCenterCard from "./NordicCenterCard";
import NordicCenterCardPlaceholder from "./NordicCenterCardPlaceholder";


function NordicCenterList({ nordicCenters, mode }) {
    if (nordicCenters) {
        return (
            <div className="m-2 mt-4" >
                
                {(mode === "home") ? 
                        <h3 className="ms-4 m-2 text-success">Favorite Nordic Centers </h3>
                         : <h3 className="m-3" >Nordic Centers</h3>}
                
                {nordicCenters.map(nordicCenter => {
                    return <NordicCenterCard key={nordicCenter.id} nordicCenter={nordicCenter} />
                })}
            
            </div>
        )
    } else {
        return (
            <div className="m-2 mt-4" >
                <h3 className="m-3" >Nordic Centers</h3>
                
                <NordicCenterCardPlaceholder />
                <NordicCenterCardPlaceholder />
                <NordicCenterCardPlaceholder />
                
            
            </div>
        )
    }
    
}

export default NordicCenterList