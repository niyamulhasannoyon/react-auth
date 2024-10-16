import { useEffect, useState, AuthContext } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userLoggedIn, setUserLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe; // Clean up the subscription when the component unmounts
    }, [])
    
    async function initializeUser(user) {
        if (user) {
            setUserLoggedIn(true);
            setCurrentUser({ ...user });
        } else {
            setUserLoggedIn(false);
            setCurrentUser(null);
        }
        setLoading(false);
    }
    
    const value = {
        currentUser, 
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}