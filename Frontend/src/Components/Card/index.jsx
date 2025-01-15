import React from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Card.css";
function Card(props) {
  const navigate = useNavigate();

  const navToPage = (url) => {
    navigate(`/${url}`);
  };

  return (
    <div>
      <div className="card-all">
        <div className="card-up">
          <img src={props.image} alt="" />
          <div className="hoverim"></div>
        </div>
        <div className="card-mid">
          <h4>{props.name}</h4>
          <div className="c-icons">
            <div className="star">
              <FaStar /> 5.0
            </div>
            <div className="fav">
              <FaHeart />
              29
            </div>
          </div>
          <h3>${props.price}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

          <div className="buttons">
            <button className="cartbtn">CART</button>
            <button onClick={() => navToPage(props.id)} className="viewbtn">
              VIEW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
