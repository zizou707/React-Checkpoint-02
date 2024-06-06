
import './App.css';
import PlayerList from './PlayerList';
import logo from './logo.svg';

function App() {
 
   return (
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px",paddingLeft:"30px"}}>
         <PlayerList/>
         <img src={logo} className="App-logo" alt="logo" />
      </div>
   )
}

export default App;
