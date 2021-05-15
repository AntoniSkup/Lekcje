import * as firebase from 'firebase'

require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCImH2cyyg0JEZ9nioRIucxhto7535FC1w",
    authDomain: "projectnavigation-81193.firebaseapp.com",
    projectId: "projectnavigation-81193",
    storageBucket: "projectnavigation-81193.appspot.com",
    messagingSenderId: "454695476102",
    appId: "1:454695476102:web:30084e19b79a8c4cfb6a07"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}


const db = firebase.firestore()

export default db;
