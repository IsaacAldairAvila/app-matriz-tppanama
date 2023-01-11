import React from 'react'
import styles from '../../styles/Card.module.css'
const Card = ({ title, children, color, onClick }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: color, boxShadow: `0px 5px 10px ${color}80` }} onClick={onClick}>
      <div className={styles.icon}>
        {children ? children : null}
      </div>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  )
}

export default Card