import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import "./Team.css";
function Team() {
  return (
    <div>
      <section id="team">
        <div className="hadmer">
          <h4>TEAM</h4>
          <h2>Leadership</h2>
        </div>
        <div className="team-all">
          <div className="team-card">
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
              alt=""
            />
            <h4>John Rooster</h4>
            <h5>Co-Founder, President</h5>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>
            <div className="tm-icons">
              <FaFacebook />
              <AiFillTwitterCircle />
              <RiInstagramFill />
              <FaLinkedin />
            </div>
          </div>
          <div className="team-card">
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
              alt=""
            />
            <h4>Tom Sharp</h4>
            <h5>Co-Founder, COO</h5>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>
            <div className="tm-icons">
              <FaFacebook />
              <AiFillTwitterCircle />
              <RiInstagramFill />
              <FaLinkedin />
            </div>
          </div>
          <div className="team-card">
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
              alt=""
            />
            <h4>Winston Hodson</h4>
            <h5>Marketing</h5>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>
            <div className="tm-icons">
              <FaFacebook />
              <AiFillTwitterCircle />
              <RiInstagramFill />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
