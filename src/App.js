import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cardhover from "./components/Cardhover/Cardhover";
import Allscreencard from "./components/AllScreenCard/Allscreencard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      {/* <Link to="/">NavBar</Link>
      <Link to="/cardhover">Cardhover</Link>
      <Link to="/allscreencard">Allscreencard</Link> */}
 < Nav/>

      <Switch>
     
      <Route exact path="/cardhover" component={Cardhover}/>
      <Route exact path="/allscreencard" component={Allscreencard}/>
      </Switch>
    </Router>
  );
}

export default App;
