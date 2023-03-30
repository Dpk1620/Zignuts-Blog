import firebase from "firebase/app";
import "firebase/firestore";

//connection btwn firebase app login
const firebaseConfig = {
    apiKey: "AIzaSyC0IwKZ-mDJ3i-3Uf7QdA6lM8FW6UqkRxs",
    authDomain: "zignutsblog.firebaseapp.com",
    projectId: "zignutsblog",
    storageBucket: "zignutsblog.appspot.com",
    messagingSenderId: "228544114716",
    appId: "1:228544114716:web:3806947b499a39edaf6fd9"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  

  export {timestamp};
  export default firebaseApp.firestore();