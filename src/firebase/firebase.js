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

// firebase ref: https://firebase.google.com/docs/reference/js/firebase.database.Query?authuser=0

const database = firebase.database();

export { firebase, database as default };

// subscribers
// child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// // -Lz_VWrQd4qSdNPKG_wJ {amount: 2101, createdAt: 943889834572, description: "Water bill", note: ""}

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// also gets called for existing ones

// database.ref("expenses").on("value", snapshot => {
//   const list = [];
//   snapshot.forEach(childSnapshot => {
//     list.push({ id: childSnapshot.key, ...childSnapshot.val() });
//   });
//   console.log(list);
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.id,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Water bill",
//   amount: 2000,
//   createdAt: 943889834572,
//   note: ""
// });

// database.ref().on("value", snapshot => {
//   const person = snapshot.val();
//   const message = `${person.name} is a ${person.job.title} at ${person.job.company}`;
//   console.log(message);
// });

// database.ref().update({
//   name: "JJ",
//   job: {
//     title: "manager",
//     company: "Apple"
//   }
// });

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     console.log(snapshot.val());
//   })
//   .catch(e => {
//     console.log("Error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "SC",
//     age: 29,
//     job: {
//       title: "software developer",
//       company: "Google"
//     },
//     stressLevel: 6,
//     location: {
//       city: "Calgary",
//       country: "Canada"
//     }
//   })
//   .then(function() {
//     console.log("Data save succeeded.");
//   })
//   .catch(function(error) {
//     console.log("Data save failed: " + error.message);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Vancouver"
// });
