import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  const [stage, setStage] = useState("loading");

  useEffect(() => {

    if (stage === "loading") {
      setTimeout(() => {
        setStage("splash");
      }, 1000);
    }

    if (stage === "splash") {
      setTimeout(() => {
        setStage("home");
      }, 2000);
    }

  }, [stage]);

  if (stage === "loading") return <LoadingScreen />;
  if (stage === "splash") return <SplashScreen />;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
