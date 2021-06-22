import React from 'react'
import './RowAdvertisement.css'


function RowAdvertisement({ isLeft, commonImage, commonVideo, title, subtitle, isSecondRow }) {
    return (
        <div className="parent-class" >
            <div className="child-class">
                <div className="playing-content" >

                    <h1>{title}</h1>


                    <h2>{subtitle}</h2>

                </div>



                <div className="video-advertisement" >

                    <div className={`${isSecondRow ? "play-video-second" : "play-video"}`}>
                        <video
                            src={commonVideo}
                            autoPlay playsInline muted loop
                        ></video>
                    </div>
                    <div className="img-wrapper">
                        <img src={commonImage} alt="netflix-tv" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default RowAdvertisement
