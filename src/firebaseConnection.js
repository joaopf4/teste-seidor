import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyAhOutSU6jiH7sNASxuyl1l2TqgMf6Fxfw",
    authDomain: "teste-seidor.firebaseapp.com",
    projectId: "teste-seidor",
    storageBucket: "teste-seidor.appspot.com",
    messagingSenderId: "508815121741",
    appId: "1:508815121741:web:8e239a34aa76755a872b04"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  