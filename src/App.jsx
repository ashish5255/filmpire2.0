import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
// If you are using react-router-dom version V6.0.0 then it will not work, so downgrade the version of the react-router-dom to be below V6 and run
// npm install react-router-dom@5.2.0
import {
  Actors,
  MovieInformation,
  Movies,
  Navbar,
  Profile,
} from "./components";
const App = () => {
  return (
    <div>
      <CssBaseline />
      {/* Since we want navbar to always be visible we use it above main */}
      <Navbar />
      <main>
        {/* switch comes from react router dom, and we will have different routes in switch */}

        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>

          <Route exact path="/profile/:id">
            <Profile />
          </Route>

          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>

          <Route exact path="/actors/:id">
            <Actors />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
