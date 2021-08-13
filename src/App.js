import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./Components/Blogs";
import Homepage from "./Components/Homepage";
// import News from "./Components/News";
import Navbar from "./Components/Navbar";
import { selectSignedIn } from "./features/userSlice";
import "./styling/app.css";

const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      {/* <News/> */}
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;
