import React from 'react';
import s from './Categoy.module.scss';
import Sectiontitle from '../SectionTitle/Sectiontitle';

import Products from '/public/products.json';
import Card from '../Cards/Card';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <>
      <section className={s.category}>
        <div className="container">
          <Sectiontitle>New Arrials</Sectiontitle>
          <div className={s.wrapper}>
            {Products.slice(0, 4).map((card) => (
              <Link to={`/product/${card.id}`}>
                <Card
                  key={card.id}
                  image={card.image}
                  name={card.name}
                  price={card.price}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
