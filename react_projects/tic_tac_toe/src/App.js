import './App.css';
import Square from './components/Square';

function App() {
  return (
    <div className="App">
     <Square value ="X" onClick = {() => alert('X')}></Square>
    </div>
  );
}

export default App;
