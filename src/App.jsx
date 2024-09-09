import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import "./App.css";

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  );
}

export default App;
