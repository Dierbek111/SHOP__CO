import s from './Products.module.scss';
import React from 'react';

const ProductsWrap = ({product}) => {
  return (
    <>
      <section className={s.productwrap}>
        <div className="container">
          <div className={s.wrap}>
            <div className={s.images}>
              <div>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
               </div>
              <img src={product.image} alt="" />
            </div>
            <div className={s.box}>
              <div>
                <h2>{product.name}</h2>
                <h3> звезды крч 4/5 </h3>
                <div className={s.price}>
                  <b>{product.price}</b>
                  <s>{product.price * 1.1}</s>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, recusandae.</p>
              </div>
              <div>
               <p>Select-color</p>
               <div className={s.colors}>
               <div></div>
               <div></div>
               <div></div>
              </div>
            </div>

<div>
{/* <p>Choise Sixe</p> */}
<div className={s.brns}>
   <button>Snall</button>
   <button>Snall</button>
   <button>Snall</button>
   <button>Snall</button>
</div>
</div>

          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default ProductsWrap;