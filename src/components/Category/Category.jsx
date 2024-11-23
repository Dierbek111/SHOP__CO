import React from 'react'
import s from './Categoy.module.scss'
import Sectiontitle from '../SectionTitle/Sectiontitle'


import Products from '/public/products.json'
import Card from '../Cards/Card'


const Category = () => {
  return (
    <>
   <section className={s.category}>
        <div className="container">
          <Sectiontitle>New Arrials</Sectiontitle>
          <div className={s.wrapper}>
            {Products.map(card => (
              <Card key={card.id} image={card.image} name={card.name} price={card.price} />
            ))}
           




          </div>
        </div>
      </section>
    </>
  )
}

export default Category