import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero";
import Products from "../../Components/Products";
import About from "../../Components/About";
import Team from "../../Components/Team";
import Services from "../../Components/Services";
function Main() {
  return (
    <div>
      <main>
        <Hero />
        <Products />
        <About />
        <Team />
        <Services />
      </main>
    </div>
  );
}

export default Main;
