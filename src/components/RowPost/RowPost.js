import React, { useEffect, useState } from 'react';
import './RowPost.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlid] = useState('')
    useEffect(() => {
        console.log('row post');
        axios.get(props.url)
            .then((response) => {
                console.log(response.data)
                setMovies(response.data.results)
            })
        console.log('row post end');
    }, [])

    // for playing youtube videos
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    const handleMovie = (id) => {
        console.log("id:", id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log("handle movie");
            console.log(response.data.results[0].key)
            console.log("urlid state:- ",urlid);
            if (response.data.results.length !== 0) {
                if(urlid){
                    setUrlid("")
                }else{
                    setUrlid(response.data.results[0])
                }
                
               
                
            } else {
                console.log('array empty')
            }
        }).catch((err)=>{console.log("Error",err)})
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {/* iterating through each object in the rowpost */}

                {
                    movies.map((obj) =>
                        <img onClick={() => handleMovie(obj.id)} 
                        key={obj.id}
                        className={props.isSmall ? "small-poster" : "big-poster"} 
                        src={`${imageUrl}${props.isSmall ? obj.backdrop_path : obj.poster_path}`} alt={obj.title} />
                    )
                }


            </div>
            { urlid && <Youtube opts={opts} videoId={urlid.key} />}
        </div>
    )
}

export default RowPost
