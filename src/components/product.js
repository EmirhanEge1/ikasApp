import React from "react";
import Image from "next/image";
const Product = ({ image, brand, price, title, alt ,salePrice,imageA}) => {
  console.log(image);
  return (
    <div className="box1">
      <div>
        <a href="index1.js">
        <Image src={image} alt={alt} width={240} height={240} />
        </a>
      </div>
      <div className="afterImage">
        <Image src={imageA} alt={alt} width={240} height={240} />
      </div>
      <div className="info">
        <div className="product">{title}</div>
        <div className="brand">{brand}</div>
        <div className="price">
            <div className ="discount">  {salePrice}</div>
          <span> ₺ {price}</span>
        </div>
      </div>
    </div>
  );
};
export default Product;