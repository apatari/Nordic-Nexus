import React, { useEffect, useState, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import "bootswatch/dist/flatly/bootstrap.min.css";

import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import NordicCenters from "./NordicCenters";
import TripForm from "./forms/TripForm";
import NordicCenterForm from "./forms/NordicCenterForm";
import NordicCenterDetail from "./NordicCenterDetail";

export const UserContext = createContext(null)


function App() {
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/check_session")
    .then(r => {
      if (r.ok) {
        r.json().then(user => setUser(user))

      }
    });
  }, [])

  if (!user) return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Header />
        <Login onLogin={setUser}/>
      </UserContext.Provider>
    </div>
  )

  return (
    <div>
    <UserContext.Provider value={[user, setUser]}>
      <Header />

      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
          
        <Route exact path="/nordiccenters">
          <NordicCenters />
        </Route>
        <Route exact path="/trips/new">
          <TripForm />
        </Route>
        <Route exact path="/nordiccenters/new">
          <NordicCenterForm />
        </Route>
        <Route exact path="/nordiccenters/:nordic_center_id" >
          <NordicCenterDetail />
        </Route>
      </Switch>
    </UserContext.Provider>
    </div>
  )

  





}

export default App;
