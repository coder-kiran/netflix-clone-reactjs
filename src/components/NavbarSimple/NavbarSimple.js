import React from 'react'
import './NavbarSimple.css'
import {useHistory} from 'react-router-dom'
function NavbarSimple() {
    const history = useHistory()
    return (
        <div className="simpleNav">
            <img onClick={()=>{
                history.push('/')
            }} className="navbarMain-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            
        </div>
    )
}

export default NavbarSimple
