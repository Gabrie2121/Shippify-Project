
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import Teste from './Teste';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home">home</Link>
        <Link to="/teste">teste</Link>

        <Routes>
          <Route exact path= "/home" element={<Home/>}/>
          <Route exact path= "/teste" element={<Teste/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
