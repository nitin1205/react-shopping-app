import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const logIn = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        // console.log(response);
    }

    
    return (
        <>
        <button onClick={logIn}>Sign in with popup</button>
        <div>sign-in.component</div>
        </>
    )
}

export default SignIn;