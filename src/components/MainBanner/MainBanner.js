import React,{useState} from 'react'
import './MainBanner.css'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory} from 'react-router-dom'
function MainBanner() {
    const history = useHistory() 
    const [email, setEmail] = useState("sdfsdfdf")
    return (
        <div>
            <div className="main-banner ">

                <div className="main-banner-sub ">
                    <div className="center ">
                        <div className="main-heading ">
                            <h1>Unlimited movies, TV <br /> shows and more.</h1>
                        </div>
                        <div className="sub-heading ">
                            <h2>Watch anywhere. Cancel anytime.</h2>
                        </div>
                        <div className="small-heading ">
                            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                        </div>
                        
                     <div className="main-form ">
                            <div className="input-field ">
                                <input type="text"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="input-btn ">
                                <button onClick={()=>{
                                    history.push('/signup',{email:email})
                                }}><span>Get Started</span></button>
                            </div>
                        </div> 
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MainBanner
