import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: 'happy-hr-195117.firebaseapp.com',
    projectId: 'happy-hr-195117',
    databaseURL: 'https://happy-hr-195117.firebasio.com',
    storageBucket: 'happy-hr-195117.appspot.com',
};

const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);