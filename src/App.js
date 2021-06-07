import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action, comedy, horror, romance, documentaries} from './urls'



function App() {
  return(
    <div className="app">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Orginals" />
      <RowPost  url={action}  title="Action Movies" isSmall />
      <RowPost  url={comedy}  title="Comedy Movies" isSmall />
      <RowPost  url={horror}  title="Horror Movies" isSmall />
      <RowPost  url={romance}  title="Romantic Movies" isSmall />
      <RowPost  url={documentaries}  title="Documentaries" isSmall />
    </div>
  )
}


export default App;