import { auth } from "./firebase";
import { createUserWithEmailAndPassword,signInWithPopup,
        // sendPasswordResetEmail,updatePassword,sendEmailVerification,
        GoogleAuthProvider, signInWithEmailAndPassword } 
        from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth , email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(email, password);
};

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result
};

export const doSignOut = () => {
    return auth.signOut();
};

// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth,email);
// };

// export const doPasswordUpdate = (password) => {
//     return updatePassword(auth.currentUser, password);
// };

// export const doEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//         handleCodeInApp: true,
//     });
// };
