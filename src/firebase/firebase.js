import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkMGB_8PxoBmUOVSAKAK2gFs16opCA0Uw",
  authDomain: "budget-tracker-c53c3.firebaseapp.com",
  databaseURL: "https://budget-tracker-c53c3.firebaseio.com",
  projectId: "budget-tracker-c53c3",
  storageBucket: "budget-tracker-c53c3.appspot.com",
  messagingSenderId: "340588271212",
  appId: "1:340588271212:web:ba4814d9f43913046faa49"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase
  .database()
  .ref()
  .set({
    name: "Siliang Chang"
  });
