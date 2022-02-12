import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDq31orpz56FnTtJN0PXnF6G3IA-eST9X4",
    authDomain: "ninja-firebase-learning.firebaseapp.com",
    projectId: "ninja-firebase-learning",
    storageBucket: "ninja-firebase-learning.appspot.com",
    messagingSenderId: "485118095789",
    appId: "1:485118095789:web:f3232c25200954d297f124"
};

// init firebase

initializeApp(firebaseConfig);

// init services

const db = getFirestore()

const auth = getAuth()

export { db,auth }


