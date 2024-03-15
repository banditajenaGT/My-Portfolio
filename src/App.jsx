import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
