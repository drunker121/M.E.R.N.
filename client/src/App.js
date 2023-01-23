import "./App.css";
import { Route, Routes, Router, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import SignUp from "./Components/SignUp";
import UseEffectAPI from "./Components/UseEffectAPI";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/useeffect" element={<UseEffectAPI/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      {/* <Router>
          <Routes>
            <Route path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>
          </Routes>
        </Router>
      </div> */}
    </>
  );
}

export default App;
