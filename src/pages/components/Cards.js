import Buy from './Buy'
import styles from '../layouts/Cards.module.css'
import { Products } from '../Products'
import { ImCart } from 'react-icons/im'

function Cards({ setCart }) {
  return (
    <>
      {Products.products.map(item => {
        return (
          <div className={styles.box}>
            <img src={item.image} alt="Imagem Exemplo" />
            <h3>{item.title}</h3>
            <h3 className={styles.priceStyle}>{item.price.toFixed(2)}</h3>
            <Buy
              AddCart={() => {
                setCart(state => {
                  localStorage.setItem('cart', JSON.stringify([...state, item]))
                  return [...state, item]
                })
              }}
            />
          </div>
        )
      })}
    </>
  )
}

export default Cards
