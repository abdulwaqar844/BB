import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signIn, authUser, loading } = useAuth();

  const HandleSubmit = (event) => {
    setError(null)
    signIn(email, password)
      .then(authUser => {
        router.push('/');
      })
      .catch(error => {
        setError(error.message)
      });
    event.preventDefault();
  };
  useEffect(() => {
    if (authUser)
      router.push('/')
  }, [authUser, loading])


  return (
    <div className="container text-center">
      <div className="form-signin w-100 m-auto pt-5">
        <form onSubmit={HandleSubmit}>
          <img
            className="mb-4"
            src="/images/icon.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password" onChange={(event) => setPassword(event.target.value)}

            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>

          <div className="pt-5">
            <Link href="/register" className="mt-5 mb-3 text-muted">
              <span className="nav-link active h4 ">Register Now</span>
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}

export default login;
