import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCHtx4gGlh1QQaGbOTMJDaqJ2E31N-vbtw',
  authDomain: 'boilergram-26f3c.firebaseapp.com',
  projectId: 'boilergram-26f3c',
  storageBucket: 'boilergram-26f3c.appspot.com',
  messagingSenderId: '518155617347',
  appId: '1:518155617347:web:fb267a97d9f8746b3f40f6',
  measurementId: 'G-MSXW5QH4V6',
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;

export {firebase, FieldValue};
