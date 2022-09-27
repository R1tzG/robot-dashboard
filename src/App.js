import './Styles/index.css';
import Header from './Components/Header.js';
import FieldMap from './Components/FieldMap.js';
import Telemetry from './Components/Telemetry.js';

function App() {
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="data">
        <FieldMap />
        <Telemetry />
      </div>
    </div>
  );
}

export default App;
