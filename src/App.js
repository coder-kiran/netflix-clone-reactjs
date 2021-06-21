import React from 'react';
import './App.css';
import HomePage from './Pages/Home/Home';
import MainPage from './Pages/Main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignupPage from './Pages/SignUp/Signup';
import LoginPage from './Pages/Login/Login';
import { useState } from 'react';
import { useEffect } from 'react';
import {Firebase} from './firebase/firebase'



function App() {
  const [user, setUser] = useState("")
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    
  }, [])
  return (
    <div className="app" style={{backgroundColor:'black'}}>
      
      <Router>

        <Route path='/' exact>
          <MainPage user={user} />
        </Route>
        
        <Route path='/home'>
          <HomePage user={user} />
        </Route>

        <Route path='/signup'>
          <SignupPage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>
     
      </Router>
      
    </div>
  )
}


export default App;