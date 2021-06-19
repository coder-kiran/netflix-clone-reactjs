import {API_KEY} from './constants/constants'
export const originals=`trending/all/week?api_key=${API_KEY}&language=en-US`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy=`discover/movie?api_key=${API_KEY}&with_genres=35`
export const horror=`discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance=`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documentaries=`discover/movie?api_key=${API_KEY}&with_genres=99`

// urls for main page

export const firstImage ="images/netflix-tv.png"
export const firstVideo ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"

export const secondImage="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
export const secondVideo ="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
