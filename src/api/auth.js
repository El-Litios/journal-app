// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA7aMW_GWNRfwZ_QxZYlBdLZm4zx96ckg",
  authDomain: "vue-journal-app-e6f46.firebaseapp.com",
  databaseURL: "https://vue-journal-app-e6f46-default-rtdb.firebaseio.com",
  projectId: "vue-journal-app-e6f46",
  storageBucket: "vue-journal-app-e6f46.appspot.com",
  messagingSenderId: "489411227266",
  appId: "1:489411227266:web:677a4a678dddbc031e8e9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth()


export { app, auth }
