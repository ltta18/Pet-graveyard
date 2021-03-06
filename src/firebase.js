import firebase from "firebase/app"
import "firebase/firestore"

export const FIREBASE_APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;


var firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: "pet-graveyard.firebaseapp.com",
    databaseURL: "https://pet-graveyard.firebaseio.com",
    projectId: "pet-graveyard",
    storageBucket: "pet-graveyard.appspot.com",
    messagingSenderId: "129486054186",
    appId: "1:129486054186:web:6b098fdabd6961401e3453",
    measurementId: "G-PQHVFV9862"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

export default firebase