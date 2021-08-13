import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
// import '.../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../styling/bootstrap.min.css';
import { GoogleLogout } from "react-google-login";

import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  selectUserData,
  setInput,
  setSignedIn,
  setUserData,
} from "../features/userSlice";

import "../styling/navbar.css";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("tech");
  const isSignedIn = useSelector(selectSignedIn);
  const userData = useSelector(selectUserData);

  const dispatch = useDispatch();

  const logout = (response) => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };


  return (
    <div className="navbar">
      <h1 className="navbar__header">Adhyayan</h1>
      {isSignedIn && (



        <div className="blog__search">

          {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
             
              
              
               
                  <div class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </div>
                  <div class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </div>
                 
              
                
              
            </div>
          </nav> */}
          
          {/* <div className="navElemet">
    <a className="nav-link active" aria-current="page" href="#">Home</a>

    <a className="nav-link" href="#">Link</a>

</div> */}
          <input
            className="search"
            placeholder="Search for a blog"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="submit" onClick={handleClick}>
            Search
          </button>
        </div>
      )}

      {isSignedIn ? (
        <div className="navbar__user__data">
          <Avatar
            className="user"
            src={userData?.imageUrl}
            alt={userData?.name}
          />
          <h1 className="signedIn">{userData?.givenName}</h1>
          <GoogleLogout
            clientId="679186624466-da52kliba76jlh1aald350j9jctspqg9.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="logout__button"
              >
                Logout
              </button>
            )}
            onLogoutSuccess={logout}
          />
        </div>
      ) : (
        <h1 className="notSignedIn">User not available </h1>
      )}
    </div>
    //     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">Navbar w/ text</a>
    //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarText">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">Home</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Features</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Pricing</a>
    //         </li>
    //       </ul>
    //       <span class="navbar-text">
    //         Navbar text with an inline element
    //       </span>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
