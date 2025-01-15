import React from "react";
import "./Services.css";
import { MdPieChart } from "react-icons/md";
import { FaBackspace } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdBeenhere } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { IoCloudDone } from "react-icons/io5";

function Services() {
  return (
    <div className="serv">
      <section id="services">
        <div className="hadmer">
          <h4>Our Services</h4>
          <h2>We Offer Services</h2>
        </div>

        <div className="serv-cards">
          <div className="serv-card">
            <MdPieChart />
            <div className="sc-txt">
              <h5>Business Consulting</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="serv-card">
            <FaBackspace />
            <div className="sc-txt">
              <h5>Market Analysis</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="serv-card">
            <IoMdTimer />
            <div className="sc-txt">
              <h5>User Monitoring</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="serv-card">
            <MdBeenhere />
            <div className="sc-txt">
              <h5>Seller Consulting</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="serv-card">
            <MdBusinessCenter />
            <div className="sc-txt">
              <h5>Financial Investment</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
          <div className="serv-card">
            <IoCloudDone />
            <div className="sc-txt">
              <h5>Financial Management</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <a href="">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
