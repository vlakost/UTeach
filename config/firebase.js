import firebase from 'firebase';

require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyDhiVzWmUKVKleb0HWnWBVZoQUoiuZExMU',
  projectId: 'uteach-83365',
  authDomain: '895348880554-cfs4sbn46acvd8gsev46bv298nickhh9.apps.googleusercontent.com',
  messagingSenderId: 'messagingSenderId',
  databaseURL: 'https://uteach-83365.firebaseio.com/',
  storageBucket: 'storageBucket',
  appId: '1:777777777777:web:d93b5ca1475efe57',
};

firebase.initializeApp(config);

const db = firebase.firestore();

// Need to add this to forgo deprecated warnings
db.settings({});

export default db;
