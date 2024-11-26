import React from 'react'
import s from './ShopWrap.module.scss'

const ShopWrap = () => {
    return (
        <>
            <section className={s.shopwrap}>
                <div className="container">
                    <div className={s.wrap}>

                        <div className={s.card}>
                            <h2>Casual</h2>
                            <img src="" alt="" />
                        </div>


                        <div className={s.card}>
                            <h2>Formal</h2>
                            <img src="" alt="" />
                        </div>


                        <div className={s.card}>
                            <h2>Party</h2>
                            <img src="" alt="" />
                        </div>


                        <div className={s.card}>
                            <h2>GYM</h2>
                            <img src="" alt="" />
                        </div>




                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopWrap

