import React from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer>
        <section id="footer">
          <div className="footer-up">
            <div className="f-bout">
              <h3>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
                veritatis aliquam.
              </p>
            </div>
            <div className="f-links">
              <h3>Quick Links</h3>
              <a href="">About Us</a>
              <a href="">Services</a>
              <a href="">Testimonials</a>
              <a href="">Contact Us</a>
            </div>
            <div className="f-icons">
              <h3>Follow Us</h3>
              <p>
                {" "}
                <FaFacebook />
                <AiFillTwitterCircle />
                <RiInstagramFill />
                <FaLinkedin />
              </p>
            </div>
            <div className="f-prod">
              <h3>Featured Product</h3>
              <img
                src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
                alt=""
              />
              <h5>Leather Brown Shoe</h5>
              <h6>$$60.00</h6>
              <button>ADD TO CART</button>
            </div>
          </div>
          <div className="footer-low">
            Copyright ©2025 All rights reserved | This template is made with{" "}
            <FaHeart /> by Colorlib
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
