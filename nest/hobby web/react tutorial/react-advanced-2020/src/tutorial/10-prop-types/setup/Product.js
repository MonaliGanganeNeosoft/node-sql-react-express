import React from "react";
import PropTypes from "prop-types";
import Defaultimage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <h4>Single product</h4>
      <img src={url || Defaultimage} alt={name || "default name"} />
      <h4>{name}</h4>
      <p>${price || 3.44}</p>
    </article>
  );
};
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: "default name",
//   price: 3.44,
//   image: Defaultimage,
// };
export default Product;
