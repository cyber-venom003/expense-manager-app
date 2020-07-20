import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCfOOfbwwyhOnTir8iytmlMB8lcDGI96Q0",
    authDomain: "expensify-app-c014b.firebaseapp.com",
    databaseURL: "https://expensify-app-c014b.firebaseio.com",
    projectId: "expensify-app-c014b",
    storageBucket: "expensify-app-c014b.appspot.com",
    messagingSenderId: "553137976759",
    appId: "1:553137976759:web:7a8bb21ee9e7770f71e432"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const database = firebase.database();

export {firebase , googleAuthProvider , database as default};

// database.ref('expenses').push({
//   createdAt: 1594885418822,
//   amount: 5000,
//   description: 'Birthday Party'
// });

// database.ref('expenses').push({
//   createdAt: 1594885498403,
//   amount: 800,
//   description: 'Fibre Broadband Bill'
// });



// database.ref('expenses').on('child_removed' , (snapshot) => {
//   console.log(snapshot.key , snapshot.val());
// });

// database.ref('expenses').on('child_changed' , (snapshot) => {
//   console.log(snapshot.key , snapshot.val());
// });