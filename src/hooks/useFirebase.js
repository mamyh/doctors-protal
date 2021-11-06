import { useEffect, useState } from "react";
import initializingApp from "../pages/Login/firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";



initializingApp();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, history) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser);
                //send name to the firebase 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { }).catch(error => { })
                history.replace('/');
                setAuthError('');
            })
            .catch((error) => {

                setAuthError(error.message);

            }).finally(() => setisLoading(false));
    }
    const login = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const destination = location?.state?.from || '/';
                setUser(user);
                history.push(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            }).finally(() => setisLoading(false));
    }
    const logout = () => {
        setisLoading(true);
        signOut(auth).then(() => {
            setUser({})
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        }).finally(() => setisLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setisLoading(true);
        signInWithPopup(auth, googleProvider).then(result => {
            const destination = location?.state?.from || '/';
            setUser(result.user);
            history.push(destination);
            setAuthError('')
        }).catch((error) => {
            setAuthError(error.message)
        }).finally(() => setisLoading(false));
    }

    //observer 
    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
            } else {
                setUser({});
            }
            setisLoading(false);
        });
        return () => unsubscriber;
    }, []);

    return {
        user, registerUser, login, logout, isLoading, authError, signInWithGoogle
    }
}

export default useFirebase;
