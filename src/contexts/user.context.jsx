import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocFromAuth } from "../utils/firebase/firebase.utils"

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) =>{
            if (user) {
                createUserDocFromAuth(user);
            };
            setCurrentUser(user);
            console.log(currentUser);
        });

        return unsubscribe;
    });

    return <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
}