import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDkDlUVTtwJBfbBW4KHZQNR5BNZ5v81mSw",
    authDomain: "crwn-db-616f6.firebaseapp.com",
    databaseURL: "https://crwn-db-616f6.firebaseio.com",
    projectId: "crwn-db-616f6",
    storageBucket: "crwn-db-616f6.appspot.com",
    messagingSenderId: "212555150450",
    appId: "1:212555150450:web:76d2feaae0efcec5393eeb",
    measurementId: "G-7ZBRHVCWRJ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}


export default firebase;