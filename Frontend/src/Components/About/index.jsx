import React from "react";
import "./About.css";
function About() {
  return (
    <div>
      <section id="about">
        <div className="about-all">
          <div className="about-l">
            <img
              src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
              alt=""
            />
            <div className="boutbox">
              <h3>Trusted Merchant</h3>
              <p>FOR 50 YEARS</p>
            </div>
          </div>
          <div className="about-r">
            <h4>Merchant Company</h4>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
              ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
              inventore, rem maxime, nisi excepturi ipsam libero ratione
              adipisci alias eius vero vel!
            </p>
            <button className="boutbtn">LEARN MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
