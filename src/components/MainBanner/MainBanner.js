import React from 'react'
import './MainBanner.css'
function MainBanner() {
    return (
        <div>
            <div className="banner">
                
              
                  <div className="center">
                     <div className="main-heading">
                         <h1>Unlimited movies, TV <br/> shows and more.</h1>
                     </div>
                     <div className="sub-heading">
                     <h2>Watch anywhere. Cancel anytime.</h2>
                     </div>
                     <div className="small-heading">
                         <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                     </div>
                     <div className="main-form">
                         <div className="input-field">
                            <input type="text" 
                           
                            placeholder="Email address" 
                            />
                         </div>
                         <div className="input-btn">
                            <button><span>Get Started</span></button>
                         </div>
                     </div>
                  </div>
               
                 
            </div>
            
        </div>
    )
}

export default MainBanner
