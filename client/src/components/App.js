import React, { useEffect, useState, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import "bootswatch/dist/flatly/bootstrap.min.css";

import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import NordicCenters from "./NordicCenters";
import TripForm from "./forms/TripForm";
import NordicCenterForm from "./forms/NordicCenterForm";

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
      <Header user={user} setUser={setUser} />
      <Login onLogin={setUser}/>
    </div>
  )

  return (
    <div>
      <Header user={user} setUser={setUser} ></Header>

    <UserContext.Provider value={user}>
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
      </Switch>
    </UserContext.Provider>
    </div>
  )

  





}

export default App;
