import styles from '../layouts/Cards.module.css'
import { ImCart } from 'react-icons/im'

function Buy({ AddCart }) {
  return (
    <button className={styles.buttonStyle} onClick={AddCart}>
      <ImCart />
    </button>
  )
}

export default Buy
