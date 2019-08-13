import firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDzUS96CaH0XI4JPXgfrX3mBBmp9WNdqU',
  authDomain: 'crwn-clothing-2ddfd.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-2ddfd.firebaseio.com',
  projectId: 'crwn-clothing-2ddfd',
  storageBucket: '',
  messagingSenderId: '86612050149',
  appId: '1:86612050149:web:e1e801a78f1a5971'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
