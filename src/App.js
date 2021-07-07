import Navbar from "components/Navbar.js";
import Dashboard from "components/Dashboard.js";
import "App.css";
import "./assets/global-styles.css";
import Topbar from "components/Topbar";
import Footer from "components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Navbar />
        <Route path='/'           exact component={Dashboard} />
        <Route path='/about' component={Footer} />
      </Router>
    </div>
  );
}

export default App;
