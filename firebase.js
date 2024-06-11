// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkvZ6dpl2EMepuxNk-SOTnENZ69dPvxU",
  authDomain: "login-f9d29.firebaseapp.com",
  projectId: "login-f9d29",
  storageBucket: "login-f9d29.appspot.com",
  messagingSenderId: "37635070455",
  appId: "1:37635070455:web:a55cc7f6e1662956eab6f2"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export {auth};