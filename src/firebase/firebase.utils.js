import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAD6KwrjEEV7izS6N-JY1iWhi7w8AN3ueI',
	authDomain: 'react-clothes-db-62c8e.firebaseapp.com',
	projectId: 'react-clothes-db-62c8e',
	storageBucket: 'react-clothes-db-62c8e.appspot.com',
	messagingSenderId: '1055016833288',
	appId: '1:1055016833288:web:eb6270c662f34a5e451cbd',
	measurementId: 'G-1T44V31LT1',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
