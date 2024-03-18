//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB26DHz5f7iJa-HZN-z-OlJaCt_JRB_7L4",
  authDomain: "homy-hikes.firebaseapp.com",
  projectId: "homy-hikes",
  storageBucket: "homy-hikes.appspot.com",
  messagingSenderId: "325952376242",
  appId: "1:325952376242:web:efe26283160ca15f7b68ab"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
