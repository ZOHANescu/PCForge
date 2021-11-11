// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhR51Qdmbx9pmGaLM1P4bZhuQ6-kdepfk",
  authDomain: "pcforge-86614.firebaseapp.com",
  projectId: "pcforge-86614",
  storageBucket: "pcforge-86614.appspot.com",
  messagingSenderId: "870485310876",
  appId: "1:870485310876:web:b9fe202ae571695a051c59"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const authentication = firebase.authentication();
const database = app.firestore();
export{authentication, database};