import firebase from 'firebase'
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMn2Cw-8CPhKUAwfbCbFMoDWvkw-5iUFw",
  authDomain: "netflixclonekk.firebaseapp.com",
  projectId: "netflixclonekk",
  storageBucket: "netflixclonekk.appspot.com",
  messagingSenderId: "228579871945",
  appId: "1:228579871945:web:858d4373c1eda1999bd118",
  measurementId: "G-Y5MYVMHSWK"
};
  export const Firebase =  firebase.initializeApp(firebaseConfig)