import React from 'react'
import s from './Section.module.scss'

const Sectiontitle = ({ children = 'Soon...', orient = 'center' }) => {
  return (
    <>
    <h2 style={{ textAlign: orient }} className={s.title}>
      {children}
    </h2>
    </>
  )
}

export default Sectiontitle
