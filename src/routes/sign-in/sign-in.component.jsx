import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    const logIn = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
        // console.log(response);
    }

    
    return (
        <div>
            <h1>Sign in page</h1>
            <button>Sign in with Googel Popup</button>
            <SignUpForm />
        </div>      
    );
};

export default SignIn;