import { useState } from "react";
import { useDispatch } from "react-redux";

// import { 
    // signInWithGooglePopup,  
    // signInAuthUserWithEmailAndPassword 
// } from "../../utils/firebase/firebase.utils";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const dispatch = useDispatch();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        // await signInWithGooglePopup();
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            dispatch(emailSignInStart(email, password));
            // await signInAuthUserWithEmailAndPassword(email, password);
            // setCurrentUser(user)
            resetFormFields();
        } catch (err) {
            switch(err.code) {
                case 'auth/wrong-password':
                    alert('incorrect password entered');
                    break;

                case 'auth/user-not-found':
                    alert('No user associated with this email');
                    break;

                default:
                    console.log(err);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormFields({...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
            
                <FormInput
                    label='Email'
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email} 
                />
            
                <FormInput
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password} 
                />
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
  );
};

export default SignInForm;