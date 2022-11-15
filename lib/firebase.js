import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseCredentials);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//If an firebase app hasn't already been created
// if (!firebase.apps.length) {
export default auth
// }
