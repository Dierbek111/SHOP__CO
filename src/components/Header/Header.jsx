import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <nav className={s.nav}>
            <Link to={'/'} className={s.logo}>SHOP.CO</Link>
            <div className={s.menu}>
              <Link to={'/'}>Shop &darr;</Link>
              <Link to={'/'}>On Sale</Link>
              <Link to={'/'}>New Arriarls</Link>
              <Link to={'/'}>Brands</Link>
            </div>
            <input type="text" className={s.search} />
            <div className={s.box}>
              <img src="/icon1.svg" alt="" />
              <img src="/icon2.svg" alt="" />
            </div>
          </nav>
        </div>
      </header>
    </>

  )
}

export default Header