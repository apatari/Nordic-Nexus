import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootswatch/dist/flatly/bootstrap.min.css";

import Home from "./Home";
import Header from "./Header";
import Login from "./Login";

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
      <Header user={user} serUser={setUser} ></Header>

    <Switch>
      <Route exact path="/">
        <Home user={user} />
      </Route>
    </Switch>
    </div>
  )

  





}

export default App;
