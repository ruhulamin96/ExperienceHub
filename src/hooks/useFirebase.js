import { useEffect, useState } from "react";
import initializeFirebase from "../Components/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();
initializeFirebase();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  ///create new user
  const createUser = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
          console.log(auth.currentUser)
          alert('Email verification has been sent')
        });

        alert("registration creation successs");

        navigate(location.state?.from || "/");
        ///update profile
      })
      .catch((error) => {
        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //Observer
  useEffect(() => {
    setIsLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
      setIsLoading(false);
      return () => unsubscribe;
    });
  }, [user.email]);
  //signin user
  const loginUser = (email, password) => {
    // console.log('admin ', (location.state.from.pathname).includes('/newdashboard'))
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const user = userCredential.user;
        alert("login success");
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        setError(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //logout
  const logout = (e) => {
    e.preventDefault()
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        alert("log out success");
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const googleSignIn = () => {
    //google sign in
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        navigate(location.state?.from || "/");
        const user = result.user;
        alert("login successfull");
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        setError(error.message)
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
      .finally(setIsLoading(false));
  };

  return {
    user,
    createUser,
    loginUser,
    logout,
    googleSignIn,
    isLoading,
    error,
  };
};
export default useFirebase;
