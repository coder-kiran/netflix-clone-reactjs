import firebase from 'firebase'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRe4EiMxUOHnJI1lZSdRbnthJYwoyYYC8",
    authDomain: "kknetflixclone.firebaseapp.com",
    projectId: "kknetflixclone",
    storageBucket: "kknetflixclone.appspot.com",
    messagingSenderId: "939799383071",
    appId: "1:939799383071:web:0ba8553037fe383a36592a",
    measurementId: "G-XMVT7PS3D3"
  };

  export const Firebase =  firebase.initializeApp(firebaseConfig)