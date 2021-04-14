import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAq6O85GQYJvLP4Wws3OsD6Vn_nnxfFaw8",
    authDomain: "crwn-db-cfd7b.firebaseapp.com",
    projectId: "crwn-db-cfd7b",
    storageBucket: "crwn-db-cfd7b.appspot.com",
    messagingSenderId: "739946416841",
    appId: "1:739946416841:web:6decadb79a1f16443a5b18",
    measurementId: "G-Y1XNMZ83TQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase