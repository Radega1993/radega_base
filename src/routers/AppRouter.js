import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from "react";

import { HomeScreen } from '../components/HomeScreen';
import { EntretenScreen } from '../components/EntretenScreen';
import { PersonalScreen } from '../components/PersonalScreen';
import { NegocioScreen } from '../components/NegocioScreen';



export const AppRouter = () => {


  return (
    <Router>
      <div>


        <Switch>
          <Route
            exact path="/entretenimiento"
            component={ EntretenScreen }
          />

          <Route
            exact path="/personal"
            component={ PersonalScreen }
          />

          <Route
            exact path="/negocios"
            component={ NegocioScreen }
          />

          <Route
            path="/"
            component={ HomeScreen }
          />

        </Switch>
      </div>
    </Router>
  );
}
