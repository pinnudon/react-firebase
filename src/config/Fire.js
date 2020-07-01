import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBdWHHONXiza-u5fQsjDUviFVn6REjc2l8",
    authDomain: "react-firebase-82e8b.firebaseapp.com",
    databaseURL: "https://react-firebase-82e8b.firebaseio.com",
    projectId: "react-firebase-82e8b",
    storageBucket: "react-firebase-82e8b.appspot.com",
    messagingSenderId: "7378800297",
    appId: "1:7378800297:web:fef6122462a7bf8ad3a3b8"
  };

  const Fire = firebase.initializeApp(firebaseConfig)

  export default Fire