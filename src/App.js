import Navbar from 'components/Navbar.js';
import Dashboard from 'components/Dashboard.js'
import 'App.css';
import './assets/global-styles.css'
import Topbar from "components/Topbar";


function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
