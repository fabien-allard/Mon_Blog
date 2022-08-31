import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAC9bwnbqsx4PSJ3-xbqfhJa_yzgWnkbhY",

    authDomain: "myblogproject-4874e.firebaseapp.com",

    projectId: "myblogproject-4874e",

    storageBucket: "myblogproject-4874e.appspot.com",

    messagingSenderId: "754290149489",

    appId: "1:754290149489:web:64676a259d5ba107ceb3d0"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();