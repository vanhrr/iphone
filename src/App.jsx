import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import "./App.css";

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}

export default App;
