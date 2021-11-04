import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from "./pages/Appointments/Appointment/Appointment";
import Home from "./pages/Home/Home/Home";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
