import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/layout/Navbar';
import Content from '../components/layout/Content';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className='container-xl'>
      <Router>
        <Navbar />
        <Content />
      </Router>
    </div>
  );
}

export default App;