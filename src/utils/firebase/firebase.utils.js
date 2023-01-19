import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
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
                createdAt
            });
        } catch (err) {
            console.log(err.mssage)
        }
    };

    return userDocRef;    
};









