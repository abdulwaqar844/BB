import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { auth } from "../../lib/firebase";
import { Context } from "./../../context";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
function BasicExample() {
  // const { state, dispatch } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  const router = useRouter();
  const HandleSignout = () => {
    signOut(auth).then(


      router.push("/login")

    ).catch(err => console.log(err))


  };


  if (loading) {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Habit Tracker
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </nav>)


  }



  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Habit Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {user && user ? (<>
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="habit-list" className="nav-link active">
                  Habit
                </Link>
              </li>
            </ul>
            <div class="navbar-nav">
              <div class="nav-item text-nowrap">
                <button class="btn btn-md px-3 btn-danger"
                  onClick={HandleSignout}
                  className='btn '
                >
                  Logout
                </button>
              </div>
            </div>
            {/* <div className="dropdown dropstart">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>{user.displayName}
              </button>
              <ul className="dropdown-menu">
                <li>  <button
                  onClick={HandleSignout}
                  className='btn '
                >
                  Logout
                </button></li>

              </ul>
            </div> */}

          </>) : (
            <>   <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/login" className="nav-link active">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/register" className="nav-link active">
                  Register
                </Link>
              </li>
            </ul>
            </>
          )}



          {/* <span className="navbar-text">
            Signed In :  {state?.user.name}
          </span> 
          
          
            <li className="nav-item">
                <button
                  onClick={HandleSignout} className=" btn">
                  Logout
                </button>
              </li>
          */}
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
