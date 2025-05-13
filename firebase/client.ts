// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWGroN02975onGDk0RmQhbYbRVhDTTTqE",
    authDomain: "prepwise-13c04.firebaseapp.com",
    projectId: "prepwise-13c04",
    storageBucket: "prepwise-13c04.firebasestorage.app",
    messagingSenderId: "247965447922",
    appId: "1:247965447922:web:d2e038fc08897d21cbc26b",
    measurementId: "G-N9J4J2XT6C"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
