import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Foot from '../../components/Foot/Foot'
import MainBanner from '../../components/MainBanner/MainBanner'
import RowAdvertisement from '../../components/RowAdvertisement/RowAdvertisement'
import 'react-bootstrap'
import {firstImage,firstVideo,secondImage,secondVideo} from '../../urls'
function MainPage() {
    return (
        <div className="main-page">
             <NavBar />
             <MainBanner />
             <RowAdvertisement
              title="Enjoy on your TV."
              subtitle="Watch on smart TVs, PlayStation, Xbox,Chromecast, Apple TV, Blu-ray players and more."
              commonImage={firstImage}
              commonVideo={firstVideo}
               isLeft/>

             <RowAdvertisement
             title="Watch everywhere."
             subtitle="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
              commonImage={secondImage}
               commonVideo={secondVideo}
               isSecondRow
                />
             {/* <RowAdvertisement />
             <RowAdvertisement /> */}

             <Foot />
        </div>
    )
}

export default MainPage


// className={`  ${isLeft ?"playing-content": "video-advertisement"} `}