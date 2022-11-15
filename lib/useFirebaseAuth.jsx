import { useState, useEffect } from "react";
import auth from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile, signOut
} from "firebase/auth";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);

    var formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const createUser = (email, password, displayName) =>
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        updateProfile(auth.currentUser, { displayName: name }).catch((err) =>
          console.log(err)
        )
      )
      .catch((err) => console.log(err));

  const signout = () => {
    signOut(auth);

  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.Use
        setAuthUser({
          uid: user.uid,
          email: user.email,
        });
        // ...
      } else {
        setAuthUser(null)
        // User is signed out
        // ...
      }
    });
    // authStateChanged(auth)
    // onAuthStateChanged();
  }, []);

  return {
    authUser,
    loading,
    signIn,
    createUser,
    signout,
  };
}
