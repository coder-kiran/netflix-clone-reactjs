import React from 'react'
import './RowAdvertisement.css'
import {Container,Row,Col} from 'react-bootstrap'
 
function RowAdvertisement({isLeft,commonImage,commonVideo,title,subtitle,isSecondRow}) {
    return (
       <div className="parent-class" >
            <Row  className="child-class">
             <Col md="6" sm="12" className="playing-content" >
               
                    <h1>{title}</h1>
              
               
                    <h2>{subtitle}</h2>
               
            </Col>    
            <Col md="6" className="video-advertisement" >
                  
                   <div className={`${isSecondRow ? "play-video-second" : "play-video"}`}>                      
                    <video
                     src={commonVideo}
                     autoPlay playsInline muted loop
                     ></video>
                      </div>
                      <div className="img-wrapper">
                          <div className="image-wrapper2">
                          <img src={commonImage} alt="netflix-tv" />
                          </div>
                      
                      </div>                 
                   
                      
                    
               

            </Col> 
            </Row>
           
            
        </div>
    )
}

export default RowAdvertisement
