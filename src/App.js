import logo from './logo.svg';
import Titulo from './titulo'
import './App.css';
import Prueba from './prueba';

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    


          <Titulo texto={"PRUEBA"}/>

          <Titulo texto={"PINGA"}/>

          <Prueba />
        
      </header>
    </div>
  );
}

export default App;

