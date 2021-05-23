import Header from 'components/header.js';
import Dashboard from 'components/Dashboard.js'
import 'App.css';
import Topbar from "components/Topbar";


function App() {
  return (
    <div className="App">
      <Topbar />
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
