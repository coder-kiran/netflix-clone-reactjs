import React from 'react';
import './App.css';
import HomePage from './Pages/Home/Home';
import MainPage from './Pages/Main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Tsting from './components/Tsiting/Tsting';






function App() {
  return (
    <div className="app">
      
      <Router>

        <Route path='/' exact>
          <MainPage />
        </Route>
        
        <Route path='/home'>
          <HomePage />
        </Route>
     
      </Router>
      
    </div>
  )
}


export default App;