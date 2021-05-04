import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllTeams from "./components/AllTeams/AllTeams";
import NotFound from "./components/NotFount/NotFound";
import TeamDetails from "./components/TeamDetail/TeamDetails";

library.add(fab, faCheckSquare, faCoffee, faArrowRight);

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <AllTeams></AllTeams>
          </Route>
          <Route path={`/team/:id`}>
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
