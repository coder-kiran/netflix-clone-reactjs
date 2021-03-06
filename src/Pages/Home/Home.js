import React from 'react'
import Banner from '../../components/Banner/Banner';
import RowPost from '../../components/RowPost/RowPost';
import Foot from '../../components/Foot/Foot';
import {originals,action, comedy, horror, romance, documentaries} from '../../urls'
import NavBar from '../../components/NavBar/NavBar';

function HomePage({user}) {
    console.log("USER HOME",user);
    return (
        <div className="home">
            <NavBar user={user} />           
            <Banner />
            <RowPost url={originals} title="Netflix Orginals" />
            <RowPost url={action} title="Action Movies" isSmall />
            <RowPost url={comedy} title="Comedy Movies" isSmall />
            <RowPost url={horror} title="Horror Movies" isSmall />
            <RowPost url={romance} title="Romantic Movies" isSmall />
            <RowPost url={documentaries} title="Documentaries" isSmall />
            <Foot />
        </div>
    )
}

export default HomePage
