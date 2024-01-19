import React from "react";

import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";



function SignInButton() {
  const clerk = useClerk();

  return (

    <i className="fas fa-user" id="login-btn" onClick={() => clerk.openSignIn({})}></i>

  );
}

const Navbar = () => {
  return (
    <div>
      <header>
        <div id="menu-bar" class="fas fa-bars"></div>

        <a href="#" class="logo"><span>T</span>ravel</a>

        <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#book">Book</a>
          <a href="#packages">Packages</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
        </nav>

        <div class="icons">
          <i class="fas fa-search" id="search-btn"></i>


          <SignedOut>

            <SignInButton />

          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

        </div>

        <form action="" class="search-bar-container">
          <input type="search" id="search-bar" placeholder="search here..." />
          <label for="search-bar" class="fas fa-search"></label>
        </form>

      </header>
    </div>
  );
};

export default Navbar;
