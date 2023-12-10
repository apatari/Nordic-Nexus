import React, { useContext } from "react";
import { UserContext } from "./App";



function Home() {

    const user = useContext(UserContext)

    return (
        <div className="m-4" >
            <h2>home placeholder</h2>
            <p>{user.username}</p>
            <p>{user.address}</p>
            
        </div>
    )
}

export default Home