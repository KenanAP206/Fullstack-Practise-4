import React from "react";
import "./Products.css";
import Card from "../Card/index";
import { productContext } from "../../Context/ProductContext";
import { useContext } from "react";

function Products() {
  let { products, loading } = useContext(productContext);
  return (
    <div>
      <section id="products">
        <div className="hadmer">
          <h4>Popular Products</h4>
          <h2>Our Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
        <div className="products-content">
          {loading ? (
            <div className="loadbar"> loading</div>
          ) : (
            products.map((product) => (
              <Card
                id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
