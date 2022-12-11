import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../lib/firebase";
import Head from "next/head";

function Login() {
  const [user, loading, error] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const router = useRouter();

  const HandleSubmit = (event) => {
    event.preventDefault();
    setLoadingAuth(true);
    setErrorMsg(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          setErrorMsg("Incorrect Password ");
        } else if (errorCode === "auth/user-not-found") {
          setErrorMsg("Email not found");
        } else {
          setErrorMsg("Invailid Credentials");
        }

        // ..
      });
    setLoadingAuth(false);
  };
  // console.log("User", user, new Date().toLocaleTimeString());
  // console.log("loading", loading, new Date().toLocaleTimeString());
  // console.log("error", error, new Date().toLocaleTimeString());

  useEffect(() => {
    if (user) router.push("/");
  }, [user, loading]);

  if (loading)
    return (<>
      <Head>
      <title>Login | Habit Tracker App</title>
      </Head>
      <div className="d-flex justify-content-center align-items-center header">
        <div className="form-signin  m-auto pt-3">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

      </div></>

    );

  return (
    <>
      <Head>
        <title>Login | Habit Tracker App</title>
      </Head>
      <div className="container-fluid header text-center">
        <div className="form-signin w-100 m-auto pt-5">
          <form onSubmit={HandleSubmit}>
            <img
              className="mb-4"
              src="/images/icon.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-bold text-light">Please sign in</h1>

            <div className="form-floating mb-2">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(event) => setEmail(event.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-2">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <p className="text-danger">{errorMsg} </p>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              disabled={loadingAuth}
            >
              Sign in
            </button>

            <div className="pt-5">
              <Link href="/register" className="mt-5 mb-3 text-light">
                <span className="nav-link active h4  ">Register Now</span>
              </Link>
            </div>
          </form>
        </div>
      </div>{" "}
    </>
  );
}

export default Login;
