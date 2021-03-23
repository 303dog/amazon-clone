import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6El2WrgetXidVeDRSgRZlfJeqFpnm-2Y",
    authDomain: "clone-8c5e8.firebaseapp.com",
    projectId: "clone-8c5e8",
    storageBucket: "clone-8c5e8.appspot.com",
    messagingSenderId: "384154516844",
    appId: "1:384154516844:web:e3028a39ed85b124a4c749"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};