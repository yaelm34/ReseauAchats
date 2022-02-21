import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: calc(10px + 2vmin);
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  margin: 20px;
`;

const {loading, }

function clickMe() {
  this.setState({ loading: true }, () => {
    myrequest()
    .then(result => this.setState({
        loading: false,
        word : result
      }),
      );
  });
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function myrequest(){
  sleep(500)
  return "ok";
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> SQL<br></br>
          <Button onClick={clickMe}>Requête 1</Button>
          <Button onClick={clickMe}>Requête 2</Button>
          <Button onClick={clickMe}>Requête 3</Button>
          {loading ? <p>Chargement</p> : <p>Ok !</p>}
        </p>
        <br></br>
        <br></br>
        <p> NoSQL<br></br>
          <Button onClick={clickMe}>Requête 1</Button>
          <Button onClick={clickMe}>Requête 2</Button>
          <Button onClick={clickMe}>Requête 3</Button>
        </p>
        
      </header>
    </div>
  );
}

export default App;
