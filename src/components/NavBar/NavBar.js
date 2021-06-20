import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Firebase } from '../../firebase/firebase'

function NavBar({ user }) {
    const [navshow, setNavShow] = useState(false)


    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNavShow(true)
            } else {
                setNavShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])


    return (
        <div className={`navbarr ${navshow && "nav-black"}`} >
            <div className="netflixlogo">
                 <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" /> 
            </div>

            <div className="navbar-right">
                <div className="username"> 
                     <h4>Kiran K K</h4> 
                 </div> 
                 <div className="user-avatar"> 
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" /> 
                 </div> 
                <div className="signout"> 
                    <button>Sign Out</button> 
                 </div> 
            </div>


             
          
        </div>
    )
}

export default NavBar;
