import styles from '../layouts/Cards.module.css'
import { ImCart } from 'react-icons/im'
import { useState } from 'react'

function Buy({ AddCart }) {
  return (
    <button className={styles.buttonStyle} onClick={AddCart}>
      <ImCart />
    </button>
  )
}

export default Buy
