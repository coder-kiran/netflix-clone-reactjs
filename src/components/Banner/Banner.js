import React,{useEffect, useState} from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css';
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    // run once or mount when the component comes

   
    useEffect(() => { 
        
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response)=>{
            console.log('random integer');
            console.log(Math.floor(Math.random()*20)) // returns an integer number between 0 and 20
            let indexArr=Math.floor(Math.random()*20)
            console.log('object with random integer');
            console.log(response.data.results[indexArr])  
              // placing those api objects to state movie
            setMovie(response.data.results[indexArr])
             

        })

       
     }, []) //to run when  first time component mount 

    return (
        <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path :""})`}} className="banner">      
            <div className="content">
                {/* after the component get loaded useeffect will not work. */}
                <h1 className="title">{movie?movie.title:""}</h1> 
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="description">{movie?movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner;
