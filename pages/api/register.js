// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function handler(req, res) {
  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  // });
  res.status(200).json({ userCredential: "Hello" });
}
