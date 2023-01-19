import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";



//app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNfOgbkJAenqTTSYGF9rCVjfXhCWpllJs",
  authDomain: "react-shopping-app-50689.firebaseapp.com",
  projectId: "react-shopping-app-50689",
  storageBucket: "react-shopping-app-50689.appspot.com",
  messagingSenderId: "978543942406",
  appId: "1:978543942406:web:dad6699d35d9824b0d9c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (err) {
            console.log(err.mssage)
        }
    };

    return userDocRef;    
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}





