import s from "./Card.module.scss";
import React from "react";

const Card = ({image, name='Soon..', rate="0", price="4444"}) => {
  return (
    <>
      <div className={s.card}>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <img src="" alt="" />
        <b>{price}</b>
      </div>
    </>
  );
};

export default Card;
