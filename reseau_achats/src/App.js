import logo from './logo.svg';
import './App.css';
import Queries from './Requetes';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Queries></Queries>

      </header>
    </div>
  );
}

export default App;
