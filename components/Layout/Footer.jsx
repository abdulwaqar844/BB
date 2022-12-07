import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="container-fluid bg-dark py-0 my-0">
      <footer className=" my-0">
        <ul className="nav justify-content-center border-bottom py-3 pb-3 mb-3">
          <li className="nav-item">
          <Link href="/" className="nav-link active">
                Home
              </Link>
          </li>
          <li className="nav-item">
              <Link href="/about" className="nav-link active">
                About
              </Link>
            </li>
        </ul>
        <p className="text-center text-muted py-0 my-0">© 2022 Company, Inc</p>
      </footer>
    </div>
  );
}

export default Footer;
