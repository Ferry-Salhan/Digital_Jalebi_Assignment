import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDy7Mx6s2JKl_mW-XX7z27iG1WUAqjwiUU",
    authDomain: "my-list-app-3add9.firebaseapp.com",
    projectId: "my-list-app-3add9",
    storageBucket: "my-list-app-3add9.appspot.com",
    messagingSenderId: "1040793909304",
    appId: "1:1040793909304:web:b55c639154ed5e28054ecd"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export { db };
