import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '../context/AuthUserContext';

function Register() {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUser  , authUser, loading} = useAuth();
  const HandleSubmit = event => {
    event.preventDefault();
    setError(null)
    if (passwordOne === passwordTwo)
    createUser(email, passwordOne)
        .then(authUser => {
          //  updateProfile(auth.currentUser, { displayName: name }).catch(
          //   (err) => console.log(err)
          // );
          console.log("Success. The user is created in firebase")
          router.push("/");
        })
        .catch(error => {
          setError(error.message)
        });
    else
      setError("Password do not match")
  };
  useEffect(() => {
    if (authUser)
      router.push('/')
  }, [authUser, loading ])
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
          <h1 className="h3 mb-3 fw-normal">Please Register Now</h1>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              name="name"
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email" onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="passwordOne"
              onChange={(event) => setPasswordOne(event.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>    <div className="form-floating mb-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="passwordTow" onChange={(event) => setPasswordTwo(event.target.value)}

            />
            <label htmlFor="floatingPassword">Re-Enter Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Register Now
          </button>

          <div className="pt-5">
            <Link href="/register" className="mt-5 mb-3 text-muted">
              <span className="nav-link active h4 ">
                Already Registered! Login
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
